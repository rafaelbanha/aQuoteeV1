<?php
// create connection
$link = mysqli_connect('shareddb-l.hosting.stackcp.net', 'aquotee-3939fe4b
', 'V97yE742zQAIgEfy', 'aquotee-3939fe4b');

$quotes = array(["It's not the size of the dog in the fight, it's the size of the fight in the dog. Mark Twain", "inspirational"]);
    


$query = "INSERT INTO `quote`(`quote`, `topic`) VALUES";

foreach ($quotes as $key => $val) {
    $query.= " ('{$val[0]}', '{$val[1]}'),";
    echo "ARRAY \$quotes INDEX {$key} ADDED to $query. <br> <br>";
    
    //SQL only allows for 1000 rows at once... check...
    if($key == 1000) {
        break;
    }
}
// strip last coma
$query = rtrim($query, ',');
// enter query
mysqli_query($link, $query);
// check for error
echo mysqli_error($link);
?>
