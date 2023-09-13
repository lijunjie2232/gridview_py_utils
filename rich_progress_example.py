import time
from rich.progress import Progress, DownloadColumn, TextColumn, BarColumn, TaskProgressColumn, TimeRemainingColumn, TransferSpeedColumn

progress =  Progress(
        TextColumn("[progress.description]{task.description}"),
        BarColumn(complete_style="#fd79a8"),
        DownloadColumn(binary_units=True),
        TransferSpeedColumn(),
        TaskProgressColumn(),
        ' eta:',
        TimeRemainingColumn(compact=True),
        auto_refresh=True
        )

task1 = progress.add_task("[red]Downloading...", total=10)
task2 = progress.add_task("[#fd79a8]%s[%s] Processing..."%('chuck','12'), total=15000)
task3 = progress.add_task("[cyan]Cooking...", total=50000000)

progress.start()

while not progress.finished:
    progress.update(task1, advance=2)
    progress.update(task2, advance=3000)
    progress.update(task3, advance=10000000)
    time.sleep(1)

# progress.tasks[task1].description = 'finished'

progress.stop()