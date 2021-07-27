@echo off

:ok

regsvr32 /s /u server.dll

ping 127.0.0.1 -n 30 > nul

goto ok
