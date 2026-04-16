param(
  [int]$Port = 5173
)

$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$rootFull = [System.IO.Path]::GetFullPath($root).TrimEnd('\') + '\'
$listener = [System.Net.HttpListener]::new()
$prefix = "http://localhost:$Port/"

$mimeTypes = @{
  '.html' = 'text/html; charset=utf-8'
  '.css' = 'text/css; charset=utf-8'
  '.js' = 'application/javascript; charset=utf-8'
  '.json' = 'application/json; charset=utf-8'
  '.png' = 'image/png'
  '.jpg' = 'image/jpeg'
  '.jpeg' = 'image/jpeg'
  '.svg' = 'image/svg+xml'
  '.ico' = 'image/x-icon'
}

try {
  $listener.Prefixes.Add($prefix)
  $listener.Start()
  Write-Host "SmartSave website running at $prefix"
  Write-Host "Serving files from $root"
  Write-Host "Press Ctrl+C to stop."

  while ($listener.IsListening) {
    $context = $listener.GetContext()
    $response = $context.Response
    $path = [Uri]::UnescapeDataString($context.Request.Url.AbsolutePath.TrimStart('/'))

    if ([string]::IsNullOrWhiteSpace($path)) {
      $path = 'index.html'
    }

    $candidate = [System.IO.Path]::GetFullPath((Join-Path $root $path))

    if (-not $candidate.StartsWith($rootFull, [StringComparison]::OrdinalIgnoreCase) -or -not (Test-Path -LiteralPath $candidate -PathType Leaf)) {
      $response.StatusCode = 404
      $body = [Text.Encoding]::UTF8.GetBytes('Not found')
      $response.OutputStream.Write($body, 0, $body.Length)
      $response.Close()
      continue
    }

    $extension = [System.IO.Path]::GetExtension($candidate).ToLowerInvariant()
    $response.ContentType = if ($mimeTypes.ContainsKey($extension)) { $mimeTypes[$extension] } else { 'application/octet-stream' }

    $bytes = [System.IO.File]::ReadAllBytes($candidate)
    $response.ContentLength64 = $bytes.Length
    $response.OutputStream.Write($bytes, 0, $bytes.Length)
    $response.Close()
  }
}
finally {
  if ($listener.IsListening) {
    $listener.Stop()
  }
  $listener.Close()
}
