# PowerShell script to clean up duplicate git tags
Write-Host "Cleaning up duplicate git tags..." -ForegroundColor Yellow

# Get all tags
$allTags = git tag -l

# Get unique tags
$uniqueTags = $allTags | Sort-Object | Get-Unique

Write-Host "Total tags found: $($allTags.Count)" -ForegroundColor Cyan
Write-Host "Unique tags: $($uniqueTags.Count)" -ForegroundColor Cyan

# Delete all tags first
Write-Host "Deleting all existing tags..." -ForegroundColor Yellow
foreach ($tag in $allTags) {
    Write-Host "Deleting tag: $tag" -ForegroundColor Gray
    git tag -d $tag
}

# Recreate only unique tags
Write-Host "Recreating unique tags..." -ForegroundColor Yellow
foreach ($tag in $uniqueTags) {
    Write-Host "Recreating tag: $tag" -ForegroundColor Green
    git tag $tag
}

Write-Host "Tag cleanup completed!" -ForegroundColor Green
Write-Host "You may need to force push the tags to remote: git push origin --tags --force" -ForegroundColor Yellow 