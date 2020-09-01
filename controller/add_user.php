<?php include '../model/user_model.php'; ?>

<?php
  $insert_data=array(
    'id'=>$_POST['id'],
    'fn'=>$_POST['fn'],
    'ln'=>$_POST['ln'],
  );
  add_user($insert_data);
?>