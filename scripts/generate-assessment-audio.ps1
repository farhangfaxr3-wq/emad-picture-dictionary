$ErrorActionPreference = "Stop"

$projectRoot = Split-Path -Parent $PSScriptRoot
$outputDirectory = Join-Path $projectRoot "public\audio\assessment"
New-Item -ItemType Directory -Force -Path $outputDirectory | Out-Null

$recordings = [ordered]@{
  "l-a1-notebook.wav" = "The blue notebook is on the teacher's desk."
  "l-a2-train.wav" = "Maya planned to take the nine o'clock train, but a delay means it will now leave at half past nine."
  "l-b1-assignment.wav" = "Please submit your written assignment by Thursday afternoon. We will begin the short presentations next Monday."
  "l-b2-workshop.wav" = "Although the workshop has been postponed until next Wednesday, participants will receive the online materials this Friday so they can prepare in advance."
  "l-c1-committee.wav" = "The committee did not reject the proposal outright. Instead, it commissioned an independent review to determine whether the projected long-term savings justified the substantial initial cost."
}

$speaker = New-Object -ComObject SAPI.SpVoice
$voices = $speaker.GetVoices()
for ($index = 0; $index -lt $voices.Count; $index += 1) {
  $candidate = $voices.Item($index)
  if ($candidate.GetDescription() -like "Microsoft Zira*") {
    $speaker.Voice = $candidate
    break
  }
}
$speaker.Rate = -1

foreach ($recording in $recordings.GetEnumerator()) {
  $target = Join-Path $outputDirectory $recording.Key
  $stream = New-Object -ComObject SAPI.SpFileStream
  $stream.Open($target, 3, $false)
  $speaker.AudioOutputStream = $stream
  [void]$speaker.Speak($recording.Value)
  $stream.Close()
}

Write-Output "Generated $($recordings.Count) assessment recordings in $outputDirectory"
