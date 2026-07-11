<#
  build-media-manifest.ps1
  Regenerates /public/videos/manifest.json (and the copy in homesolutionimages/web)
  from the encoded web assets. Run after encode-homepage-media.ps1.
#>

$ErrorActionPreference = "Stop"
$env:PATH = "C:\Users\mnavn\ffmpeg-tools\ffmpeg-master-latest-win64-gpl\bin;" + $env:PATH

$SRC  = "C:\Users\mnavn\Downloads\homesolutionimages"
$WEB  = Join-Path $SRC "web"
$POST = Join-Path $WEB "posters"

function SizeKB($p) { if (Test-Path $p) { [math]::Round((Get-Item $p).Length / 1KB, 0) } else { $null } }
function Dim($p) { if (Test-Path $p) { (ffprobe -v error -select_streams v:0 -show_entries stream=width,height -of csv=p=0 "$p") } else { $null } }
function HasAudio($p) { if (Test-Path $p) { [bool](ffprobe -v error -select_streams a -show_entries stream=index -of csv=p=0 "$p") } else { $false } }

$AUTOPLAY = "muted in-view autoplay; tap = sound modal"

$map = @(
  @{slot="hero.desktop";       source="handyman.mp4";                 video="hero-handyman.mp4";        poster="hero-handyman.webp";        orientation="landscape"; treatment="muted in-view background loop"}
  @{slot="hero.modal";         source="handyman.mp4";                 video="hero-handyman-modal.mp4";  poster="hero-handyman.webp";        orientation="landscape"; treatment="click-to-play w/ audio"}
  @{slot="hero.mobile";        source="handyman (2).mp4";             video="hero-handyman-mobile.mp4"; poster="hero-handyman-mobile.webp"; orientation="portrait";  treatment="muted in-view autoplay (portrait)"}
  @{slot="feature.smarter-manage-home"; source="cleaning service (3).mp4";         video="feature-cleaning.mp4";     poster="feature-cleaning.webp";     orientation="landscape"; treatment=$AUTOPLAY}
  @{slot="feature.peace-of-mind";       source="move in move out service (2).mp4"; video="feature-move-in-out.mp4";  poster="feature-move-in-out.webp";  orientation="landscape"; treatment=$AUTOPLAY}
  @{slot="feature.quality-work";        source="handyman (3).mp4";                video="feature-handyman.mp4";     poster="feature-handyman.webp";     orientation="landscape"; treatment=$AUTOPLAY}
  @{slot="card.handyman";      source="handyman service.mp4";         video="card-handyman.mp4";    poster="card-handyman.webp";    orientation="4:3"; treatment=$AUTOPLAY}
  @{slot="card.plumbing";      source="plumbing service (2).mp4";     video="card-plumbing.mp4";    poster="card-plumbing.webp";    orientation="4:3"; treatment=$AUTOPLAY}
  @{slot="card.electrical";    source="electrical service (2).mp4";   video="card-electrical.mp4";  poster="card-electrical.webp";  orientation="4:3"; treatment=$AUTOPLAY}
  @{slot="card.cleaning";      source="cleaning service (2).mp4";     video="card-cleaning.mp4";    poster="card-cleaning.webp";    orientation="4:3"; treatment=$AUTOPLAY}
  @{slot="card.painting";      source="painting service.mp4";         video="card-painting.mp4";    poster="card-painting.webp";    orientation="4:3"; treatment=$AUTOPLAY}
  @{slot="card.furniture";     source="furniture service.mp4";        video="card-furniture.mp4";   poster="card-furniture.webp";   orientation="4:3"; treatment=$AUTOPLAY}
  @{slot="card.tv-mounting";   source="tv wall mounting.mp4";         video="card-tv-mounting.mp4"; poster="card-tv-mounting.webp"; orientation="4:3"; treatment=$AUTOPLAY}
  @{slot="card.move-in-out";   source="move in move out service.mp4"; video="card-move-in-out.mp4"; poster="card-move-in-out.webp"; orientation="4:3"; treatment=$AUTOPLAY}
  @{slot="card.house-condo";   source="house and condo.mp4";         video="card-house-condo.mp4"; poster="card-house-condo.webp"; orientation="4:3"; treatment=$AUTOPLAY}
  @{slot="reel.house-condo";   source="house and condo.mp4";          video="reel-house-condo.mp4";   poster="reel-house-condo.webp";   orientation="portrait"; treatment=$AUTOPLAY}
  @{slot="reel.house-condo-2"; source="house and condo (2).mp4";      video="reel-house-condo-2.mp4"; poster="reel-house-condo-2.webp"; orientation="portrait"; treatment=$AUTOPLAY}
  @{slot="reel.cleaning";      source="cleaning service.mp4";         video="reel-cleaning.mp4";      poster="reel-cleaning.webp";      orientation="portrait"; treatment=$AUTOPLAY}
  @{slot="reel.furniture";     source="furniture service (2).mp4";    video="reel-furniture.mp4";     poster="reel-furniture.webp";     orientation="portrait"; treatment=$AUTOPLAY}
  @{slot="reel.furniture-2";   source="furniture service (3).mp4";    video="reel-furniture-2.mp4";   poster="reel-furniture-2.webp";   orientation="portrait"; treatment=$AUTOPLAY}
  @{slot="reel.tv-mounting";   source="tv wall mounting (2).mp4";     video="reel-tv-mounting.mp4";   poster="reel-tv-mounting.webp";   orientation="portrait"; treatment=$AUTOPLAY}
  @{slot="gallery.handyman-4"; source="handyman (4).mp4";             video="gallery-handyman-4.mp4"; poster="gallery-handyman-4.webp"; orientation="landscape"; treatment=$AUTOPLAY}
  @{slot="gallery.plumbing";   source="plumbing service.mp4";         video="gallery-plumbing.mp4";   poster="gallery-plumbing.webp";   orientation="landscape"; treatment=$AUTOPLAY}
  @{slot="gallery.electrical"; source="electrical service.mp4";       video="gallery-electrical.mp4"; poster="gallery-electrical.webp"; orientation="portrait"; treatment=$AUTOPLAY}
)

$out = foreach ($m in $map) {
  $vp = Join-Path $WEB $m.video; $pp = Join-Path $POST $m.poster
  [ordered]@{
    slot = $m.slot; source = $m.source; video = "/videos/$($m.video)"; poster = "/videos/posters/$($m.poster)";
    orientation = $m.orientation; treatment = $m.treatment;
    videoDimensions = (Dim $vp); posterDimensions = (Dim $pp);
    videoSizeKB = (SizeKB $vp); posterSizeKB = (SizeKB $pp); hasAudio = (HasAudio $vp)
  }
}

$doc = [ordered]@{
  generated = (Get-Date).ToString("s")
  grade = "eq contrast1.05 brightness0.015 saturation1.07 + subtle warm colorbalance"
  autoplay = "All inline videos: muted + loop + playsinline + preload=none, IntersectionObserver >=50% to play, pause offscreen, disabled under prefers-reduced-motion. Sound only via tap-to-open modal."
  sourceFolder = $SRC; webFolder = $WEB; publicFolder = "/videos"; assets = $out
}
$doc | ConvertTo-Json -Depth 6 | Set-Content -Path (Join-Path $WEB "manifest.json") -Encoding UTF8
Copy-Item (Join-Path $WEB "manifest.json") "C:\Users\mnavn\OneDrive\Desktop\handyman\public\videos\manifest.json" -Force
Write-Output ("manifest assets: " + $out.Count)
Write-Output ("total web mp4 MB: " + [math]::Round(((Get-ChildItem "$WEB\*.mp4" | Measure-Object Length -Sum).Sum/1MB),2))
