import React, { useContext } from 'react'
import { DataExcel } from '../../context/DataExcel'
import * as FileSaver from "file-saver"
import * as XLSX from "xlsx"
import styles from "./Piepag.module.css"

function Piepag() {

    const { dataExcel } = useContext(DataExcel)
    const fileType = 'xlsx';

    const exportToExcel = async () => {
        const ws = XLSX.utils.json_to_sheet(dataExcel);
        const wb = { Sheets: { data: ws }, SheetNames: ['data'] };
        const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
        const data = new Blob([excelBuffer], { type: fileType });
        FileSaver.saveAs(data, "myfile" + ".xlsx")
    }
    return (
        <div className={styles.piepag}>
            <button onClick={exportToExcel}>
                <img src='./imagenes/excel.jpg' alt='Imagen excel'/>
                DESCARGAR RESULTADOS
            </button>
        </div>
    )
}

export default Piepag