<?php
$file = "study_log.csv";
file_put_contents($file,$_GET["data"]."\n",FILE_APPEND);
?>
