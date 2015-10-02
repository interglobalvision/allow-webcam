<?php
$dir = 'img';
$path = 'http://' . $_SERVER['HTTP_HOST'] . '/' . $dir . '/';
$list = array();
if (is_dir($dir)) {
  $files = scandir($dir, 1);
  foreach ($files as $file) {
    if (substr($file, -3) == 'jpg') {
      array_push( $list, $path . $file );
    }
  }
  echo json_encode($list);
} else {
  echo ('not dir');
}
?>