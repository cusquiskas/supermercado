<?php

    session_start();
    error_reporting(E_ALL & ~E_NOTICE);

    require_once '../../conex/conf.php';  //información crítica del sistema
    require_once '../../conex/dao.php';   //control de comunicación con la base de datos MySQL
    require_once '../../tabla/controller.php';   //genera la clase de una tabla dinámicamente bajo petición

    require_once '../../js/function.php';   //genera la clase de una tabla dinámicamente bajo petición

    header('Content-Type: application/json; charset=utf-8');

    $manejador = ControladorDinamicoTabla::set('DETALLE');
    if ($manejador->give([]) != 0) {
        die(json_encode(['success' => false, 'root' => $manejador->getListaErrores()]));
    }
    $lista = $manejador->getArray();

    $ctrlArticulo = ControladorDinamicoTabla::set('ARTICULO');
    for ($i = 0; $i < count($lista); ++$i) {
        if ($ctrlArticulo->give(['art_id' => $lista[$i]['det_art']]) != 0) {
            die(json_encode(['success' => false, 'root' => $ctrlArticulo->getListaErrores()]));
        }
        $subList = $ctrlArticulo->getArray();
        $lista[$i]['art_name'] = $subList[0]['art_name'];
    }
    echo json_encode(['success' => true, 'root' => $lista]);

    unset($ctrlArticulo);
    unset($manejador);
?>

