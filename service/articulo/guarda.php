<?php

    session_start();
    error_reporting(E_ALL & ~E_NOTICE);

    require_once '../../conex/conf.php';  //información crítica del sistema
    require_once '../../conex/dao.php';   //control de comunicación con la base de datos MySQL
    require_once '../../tabla/controller.php';   //genera la clase de una tabla dinámicamente bajo petición

    header('Content-Type: application/json; charset=utf-8');

    $manejador = ControladorDinamicoTabla::set('ARTICULO');
    $datos = json_decode(file_get_contents('php://input'), true);

    if ($manejador->save($datos) != 0) {
        die(json_encode(['success' => false, 'root' => $manejador->getListaErrores()]));
    }

    echo json_encode(['success' => true, 'root' => [['tipo' => 'Confirmacion', 'Detalle' => 'Registro guardado correctamente']]]);

    unset($datos);
    unset($manejador);
?>

