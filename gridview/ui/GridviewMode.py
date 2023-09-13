from .Commander import Commander
import time
from rich.panel import Panel
from rich.padding import Padding


class GridviewMode(Commander):
    def __init__(self, upper_commander=None, desc="", prog="", name=""):
        super().__init__(
            upper_commander=upper_commander, desc=desc, prog=prog, name=name
        )
        self._account = self._upper_commander.get_account()
        self.title = (
            "[78 @34;52;111]GridviewMode %s [inverse] %s@%s [/ #66d78c]\n❯ $ [/]"
        )
        pass

    def get_status(self):
        return self.title % (
            time.strftime("%Y-%m-%d %H:%M:%S"),
            self._account.getUserName(),
            self._account.getManagerServerIp(),
        )
