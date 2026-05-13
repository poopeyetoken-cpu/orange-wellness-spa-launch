$node = "C:\Users\doesi\AppData\Local\OpenAI\Codex\bin\node.exe"
$project = "C:\tmp\serenity-spa-launch-flat"
$env:PATH = "C:\Users\doesi\AppData\Local\OpenAI\Codex\bin;$env:PATH"

Start-Process `
  -FilePath $node `
  -ArgumentList "start-dev.mjs" `
  -WorkingDirectory $project `
  -WindowStyle Hidden `
  -RedirectStandardOutput "$project\dev.out.log" `
  -RedirectStandardError "$project\dev.err.log"
