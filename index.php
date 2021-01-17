<?php

echo $width = "<script>document.write(screen.width);</script>";
// echo $height = "<script>document.write(screen.height);</script>";

if($width!=null) {
$path = $_SERVER['DOCUMENT_ROOT'];
    if($width>376){
        $path = $_SERVER['DOCUMENT_ROOT'];
        $path .= "/StanstedGo/ipad/index.html";
        include_once($path);
    } else {
        $path = $_SERVER['DOCUMENT_ROOT'];
        $path .= "/StanstedGo/iphone/index.html";
        include_once($path);
    }
} else {
    echo json_encode(array('outcome'=>'error','error'=>"Couldn't redirect. Redirecting to iPhone version"));
}

?>
