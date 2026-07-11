<#
  encode-homepage-media.ps1
  Produces web-optimized H.264 videos + WebP posters for the homepage media map.
  - Does NOT modify source files.
  - Outputs to <src>\web and <src>\web\posters, then copies into the site's public/videos.
  A light, consistent color grade is applied to every export so the homepage reads as one brand.
#>

$ErrorActionPreference = "Stop"
$env:PATH = "C:\Users\mnavn\ffmpeg-tools\ffmpeg-master-latest-win64-gpl\bin;" + $env:PATH

$SRC    = "C:\Users\mnavn\Downloads\homesolutionimages"
$WEB    = Join-Path $SRC "web"
$POST   = Join-Path $WEB "posters"
$PUBV   = "C:\Users\mnavn\OneDrive\Desktop\handyman\public\videos"
$PUBP   = Join-Path $PUBV "posters"
New-Item -ItemType Directory -Force -Path $WEB,$POST,$PUBV,$PUBP | Out-Null

# Subtle, natural grade: mild contrast + warmth, gentle saturation. Not stylized.
$GRADE = "eq=contrast=1.05:brightness=0.015:saturation=1.07,colorbalance=rm=0.015:bm=-0.015"

function Enc {
  param(
    [string]$In,[string]$Out,[string]$Vf,
    [string]$Ss,[string]$T,[int]$Crf,[string]$Maxrate,[string]$Bufsize,
    [int]$AudioK = 96,[switch]$NoAudio
  )
  # Audio is included by default so ONE file serves muted inline autoplay
  # (via the HTML `muted` attribute) AND the sound-on lightbox. Hero background
  # loops are the exception (-NoAudio) since sound comes from the dedicated modal cut.
  $a = @("-y","-hide_banner","-loglevel","error")
  if ($Ss) { $a += @("-ss",$Ss) }
  $a += @("-i",$In)
  if ($T) { $a += @("-t",$T) }
  $a += @("-vf","fps=30,$GRADE,$Vf","-c:v","libx264","-profile:v","high","-pix_fmt","yuv420p",
          "-preset","slow","-crf","$Crf","-maxrate",$Maxrate,"-bufsize",$Bufsize,
          "-g","60","-movflags","+faststart")
  if ($NoAudio) { $a += @("-an") } else { $a += @("-c:a","aac","-b:a","${AudioK}k","-ac","2") }
  $a += (Join-Path $WEB $Out)
  & ffmpeg @a
  $mb = [math]::Round((Get-Item (Join-Path $WEB $Out)).Length/1MB,2)
  Write-Output ("  video  {0,-28} {1} MB" -f $Out,$mb)
}

function Poster {
  param([string]$In,[string]$Out,[string]$Vf,[string]$Ss,[int]$Q = 80)
  & ffmpeg -y -hide_banner -loglevel error -ss $Ss -i $In -frames:v 1 -vf "$GRADE,$Vf" -c:v libwebp -quality $Q (Join-Path $POST $Out)
  $kb = [math]::Round((Get-Item (Join-Path $POST $Out)).Length/1KB,0)
  Write-Output ("  poster {0,-28} {1} KB" -f $Out,$kb)
}

# Reusable crop-to-cover filters per slot aspect
$VF_HERO   = "scale=1920:1080:force_original_aspect_ratio=increase,crop=1920:1080"
$VF_PORT   = "scale=720:1280:force_original_aspect_ratio=increase,crop=720:1280"   # 9:16
$VF_FEAT   = "scale=1280:720:force_original_aspect_ratio=increase,crop=1280:720"   # 16:9
$VF_CARD   = "scale=960:720:force_original_aspect_ratio=increase,crop=960:720"     # 4:3
# Poster (smaller) variants
$PF_HERO   = "scale=1600:900:force_original_aspect_ratio=increase,crop=1600:900"
$PF_PORT   = "scale=720:1280:force_original_aspect_ratio=increase,crop=720:1280"
$PF_FEAT   = "scale=1000:562:force_original_aspect_ratio=increase,crop=1000:562"
$PF_CARD   = "scale=720:540:force_original_aspect_ratio=increase,crop=720:540"

Write-Output "== HERO =="
Enc -In "$SRC\handyman.mp4"        -Out "hero-handyman.mp4"        -Vf $VF_HERO -Crf 28 -Maxrate "1800k" -Bufsize "3600k" -NoAudio
Enc -In "$SRC\handyman.mp4"        -Out "hero-handyman-modal.mp4"  -Vf $VF_HERO -Crf 23 -Maxrate "3500k" -Bufsize "7000k" -AudioK 128
Enc -In "$SRC\handyman (2).mp4"    -Out "hero-handyman-mobile.mp4" -Vf $VF_PORT -Ss "0.5" -T "12" -Crf 28 -Maxrate "1500k" -Bufsize "3000k" -NoAudio
Poster -In "$SRC\handyman.mp4"     -Out "hero-handyman.webp"       -Vf $PF_HERO -Ss "2.5"
Poster -In "$SRC\handyman (2).mp4" -Out "hero-handyman-mobile.webp" -Vf $PF_PORT -Ss "2.0"

Write-Output "== FEATURES =="
Enc -In "$SRC\cleaning service (3).mp4"        -Out "feature-cleaning.mp4"    -Vf $VF_FEAT -Ss "0.5" -T "12" -Crf 27 -Maxrate "1800k" -Bufsize "3600k"
Enc -In "$SRC\move in move out service (2).mp4" -Out "feature-move-in-out.mp4" -Vf $VF_FEAT -Ss "0.5" -T "18" -Crf 26 -Maxrate "1400k" -Bufsize "2800k"
Enc -In "$SRC\handyman (3).mp4"                -Out "feature-handyman.mp4"    -Vf $VF_FEAT -Ss "1.0" -T "12" -Crf 27 -Maxrate "1800k" -Bufsize "3600k"
Poster -In "$SRC\cleaning service (3).mp4"        -Out "feature-cleaning.webp"    -Vf $PF_FEAT -Ss "3.0"
Poster -In "$SRC\move in move out service (2).mp4" -Out "feature-move-in-out.webp" -Vf $PF_FEAT -Ss "3.0"
Poster -In "$SRC\handyman (3).mp4"                -Out "feature-handyman.webp"    -Vf $PF_FEAT -Ss "4.0"

Write-Output "== CARDS =="
Enc -In "$SRC\handyman service.mp4"          -Out "card-handyman.mp4"    -Vf $VF_CARD -Ss "1.0" -T "6" -Crf 28 -Maxrate "1200k" -Bufsize "2400k"
Enc -In "$SRC\plumbing service (2).mp4"      -Out "card-plumbing.mp4"    -Vf $VF_CARD -Ss "0.6" -T "6" -Crf 28 -Maxrate "1200k" -Bufsize "2400k"
Enc -In "$SRC\electrical service (2).mp4"    -Out "card-electrical.mp4"  -Vf $VF_CARD -Ss "0.6" -T "6" -Crf 28 -Maxrate "1200k" -Bufsize "2400k"
Enc -In "$SRC\cleaning service (2).mp4"      -Out "card-cleaning.mp4"    -Vf $VF_CARD -Ss "0.6" -T "6" -Crf 28 -Maxrate "1200k" -Bufsize "2400k"
Enc -In "$SRC\painting service.mp4"          -Out "card-painting.mp4"    -Vf $VF_CARD -Ss "0.6" -T "6" -Crf 28 -Maxrate "1200k" -Bufsize "2400k"
Enc -In "$SRC\furniture service.mp4"         -Out "card-furniture.mp4"   -Vf $VF_CARD -Ss "0.4" -T "6" -Crf 28 -Maxrate "1200k" -Bufsize "2400k"
Enc -In "$SRC\tv wall mounting.mp4"          -Out "card-tv-mounting.mp4" -Vf $VF_CARD -Ss "0.2" -T "5" -Crf 28 -Maxrate "1200k" -Bufsize "2400k"
Enc -In "$SRC\move in move out service.mp4"  -Out "card-move-in-out.mp4" -Vf $VF_CARD -Ss "0.6" -T "6" -Crf 28 -Maxrate "1200k" -Bufsize "2400k"
Poster -In "$SRC\handyman service.mp4"         -Out "card-handyman.webp"    -Vf $PF_CARD -Ss "2.0"
Poster -In "$SRC\plumbing service (2).mp4"     -Out "card-plumbing.webp"    -Vf $PF_CARD -Ss "1.5"
Poster -In "$SRC\electrical service (2).mp4"   -Out "card-electrical.webp"  -Vf $PF_CARD -Ss "1.5"
Poster -In "$SRC\cleaning service (2).mp4"     -Out "card-cleaning.webp"    -Vf $PF_CARD -Ss "1.5"
Poster -In "$SRC\painting service.mp4"         -Out "card-painting.webp"    -Vf $PF_CARD -Ss "1.5"
Poster -In "$SRC\furniture service.mp4"        -Out "card-furniture.webp"   -Vf $PF_CARD -Ss "1.0"
Poster -In "$SRC\tv wall mounting.mp4"         -Out "card-tv-mounting.webp" -Vf $PF_CARD -Ss "0.8"
Poster -In "$SRC\move in move out service.mp4" -Out "card-move-in-out.webp" -Vf $PF_CARD -Ss "1.5"

Write-Output "== REEL =="
Enc -In "$SRC\house and condo.mp4"       -Out "reel-house-condo.mp4"    -Vf $VF_PORT -Ss "0.4" -T "6" -Crf 28 -Maxrate "1300k" -Bufsize "2600k"
Enc -In "$SRC\house and condo (2).mp4"   -Out "reel-house-condo-2.mp4"  -Vf $VF_PORT -Ss "0.4" -T "6" -Crf 28 -Maxrate "1300k" -Bufsize "2600k"
Enc -In "$SRC\cleaning service.mp4"      -Out "reel-cleaning.mp4"       -Vf $VF_PORT -Ss "0.5" -T "6" -Crf 28 -Maxrate "1300k" -Bufsize "2600k"
Enc -In "$SRC\furniture service (2).mp4" -Out "reel-furniture.mp4"      -Vf $VF_PORT -Ss "0.5" -T "6" -Crf 28 -Maxrate "1300k" -Bufsize "2600k"
Enc -In "$SRC\furniture service (3).mp4" -Out "reel-furniture-2.mp4"    -Vf $VF_PORT -Ss "0.5" -T "6" -Crf 28 -Maxrate "1300k" -Bufsize "2600k"
Enc -In "$SRC\tv wall mounting (2).mp4"  -Out "reel-tv-mounting.mp4"    -Vf $VF_PORT -Ss "0.3" -T "6" -Crf 28 -Maxrate "1300k" -Bufsize "2600k"
Poster -In "$SRC\house and condo.mp4"       -Out "reel-house-condo.webp"   -Vf $PF_PORT -Ss "1.5"
Poster -In "$SRC\house and condo (2).mp4"   -Out "reel-house-condo-2.webp" -Vf $PF_PORT -Ss "1.5"
Poster -In "$SRC\cleaning service.mp4"      -Out "reel-cleaning.webp"      -Vf $PF_PORT -Ss "2.0"
Poster -In "$SRC\furniture service (2).mp4" -Out "reel-furniture.webp"     -Vf $PF_PORT -Ss "2.0"
Poster -In "$SRC\furniture service (3).mp4" -Out "reel-furniture-2.webp"   -Vf $PF_PORT -Ss "2.0"
Poster -In "$SRC\tv wall mounting (2).mp4"  -Out "reel-tv-mounting.webp"   -Vf $PF_PORT -Ss "1.0"

Write-Output "== SERVICE GALLERIES (new sources) =="
# Landscape gallery adds
Enc -In "$SRC\handyman (4).mp4"      -Out "gallery-handyman-4.mp4" -Vf $VF_FEAT -Ss "1.0" -T "8" -Crf 27 -Maxrate "1800k" -Bufsize "3600k"
Enc -In "$SRC\plumbing service.mp4"  -Out "gallery-plumbing.mp4"   -Vf $VF_FEAT -Ss "1.0" -T "8" -Crf 27 -Maxrate "1800k" -Bufsize "3600k"
# Portrait gallery add
Enc -In "$SRC\electrical service.mp4" -Out "gallery-electrical.mp4" -Vf $VF_PORT -Ss "1.0" -T "8" -Crf 28 -Maxrate "1300k" -Bufsize "2600k"
Poster -In "$SRC\handyman (4).mp4"      -Out "gallery-handyman-4.webp" -Vf $PF_FEAT -Ss "3.0"
Poster -In "$SRC\plumbing service.mp4"  -Out "gallery-plumbing.webp"   -Vf $PF_FEAT -Ss "3.0"
Poster -In "$SRC\electrical service.mp4" -Out "gallery-electrical.webp" -Vf $PF_PORT -Ss "3.0"

Write-Output "== COPY TO PUBLIC =="
Copy-Item "$WEB\*.mp4"  $PUBV -Force
Copy-Item "$POST\*.webp" $PUBP -Force
Write-Output "Done."
