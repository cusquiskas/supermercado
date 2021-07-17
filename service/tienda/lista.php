<?php

    session_start();
    error_reporting(E_ALL & ~E_NOTICE);

    require_once '../../conex/conf.php';  //información crítica del sistema
    require_once '../../conex/dao.php';   //control de comunicación con la base de datos MySQL
    require_once '../../tabla/controller.php';   //genera la clase de una tabla dinámicamente bajo petición

    header('Content-Type: application/json; charset=utf-8');

    $manejador = ControladorDinamicoTabla::set('TIENDA');
    if ($manejador->give([]) != 0) {
        die(json_encode(['success' => false, 'root' => $manejador->getListaErrores()]));
    }

    $lista = $manejador->getArray();

    echo json_encode(['success' => true, 'root' => $lista]);

    unset($manejador);
?>

