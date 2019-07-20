<?php
var_dump($_GET['data']);
if(!empty($_GET)){
    $content = file_get_contents('./review.json');
    $content = json_decode($content,true);//把json格式转化为数组，数组中默认保存的是对象
    $array = $_GET['data'];
    array_push($content,$array);
    $content = json_encode($content);
    file_put_contents('./review.json',$content);
}


//uniqid()获得一个随机的数值
//$content[] = array(
//    "ID"=>uniqid(),
//    "title"=>"loser",
//    "singer"=> "GD",
//    "image"=> "../../music/tnl.jpg",
//    "music"=> "../../music/loser.mp3"
//);
//$content = json_encode($content);

//file_put_contents('../music.json',$content);

?>




