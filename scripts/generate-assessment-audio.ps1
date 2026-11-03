$ErrorActionPreference = "Stop"

$projectRoot = Split-Path -Parent $PSScriptRoot
$outputDirectory = Join-Path $projectRoot "public\audio\assessment"
New-Item -ItemType Directory -Force -Path $outputDirectory | Out-Null

$recordings = [ordered]@{
  "l-a1-library-closes.wav" = "The library closes at five o'clock today. Please return your books before then."
  "l-a1-notebook.wav" = "The blue notebook is on the teacher's desk."
  "l-a2-bus-stop.wav" = "The number eight bus will not stop outside the bank today. Please use the temporary stop near the university gate."
  "l-a2-train.wav" = "Maya planned to take the nine o'clock train, but a delay means it will now leave at half past nine."
  "l-b1-assignment.wav" = "Please submit your written assignment by Thursday afternoon. We will begin the short presentations next Monday."
  "l-b1-study-room.wav" = "Your study-room booking has been moved from Room Four to Room Six because the projector in Room Four is not working. The time of your booking remains unchanged."
  "l-b2-field-trip.wav" = "The department will cover the cost of transport for Friday's field trip, so you do not need to buy a bus ticket. Lunch, however, is not included, and students should either bring food or purchase it at the visitor centre."
  "l-b2-workshop.wav" = "Although the workshop has been postponed until next Wednesday, participants will receive the online materials this Friday so they can prepare in advance."
  "l-b2-research-interview.wav" = "Before your research interview, please read the information sheet carefully and return the signed consent form. We cannot begin the recorded interview until we have received it."
  "l-c1-committee.wav" = "The committee did not reject the proposal outright. Instead, it commissioned an independent review to determine whether the projected long-term savings justified the substantial initial cost."
  "l-c1-exhibition-delay.wav" = "Naturally, we regret postponing the exhibition, particularly after visitors planned their journeys. Still, the delay gives conservators time to stabilize two fragile works that otherwise could not have been displayed safely."
  "l-c1-policy-pilot.wav" = "The proposal is promising, but the evidence comes from institutions quite different from ours. A six-month pilot would let us examine the effects in our own context before committing resources to a university-wide rollout."
  "l-c2-causal-claim.wav" = "The association is statistically robust, but we should resist presenting it as causal. Participants were not randomly assigned, and an unmeasured factor may have influenced both their programme attendance and their eventual outcomes."
  "l-c2-uncertainty.wav" = "Uncertainty is not a defect to conceal; it is information about the range of outcomes we should prepare for. The responsible response is to communicate that range clearly and choose measures that remain useful under several plausible scenarios."
  "l-c2-urban-consultation.wav" = "The report lists how many residents attended, but it does not identify a single design decision altered by their evidence. Participation should shape the plan, not simply decorate the account of how the plan was produced."
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
