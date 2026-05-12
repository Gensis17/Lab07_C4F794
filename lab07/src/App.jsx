import { useEffect, useState } from 'react'
import './App.css'

function App() {
    const [productos, setProductos] = useState([])

    const obtenerProductos = async () => {
        try {

            const response = await fetch('https://localhost:7074/api/productos')
            const data = await response.json()
            setProductos(data)
        } catch (error) {
            console.error("Error al conectar con la API:", error)
        }
    }

    useEffect(() => {
        obtenerProductos();
    }, []);

    return (
        <>
            <h1>Inventario de Productos</h1>
            <div className="card">
                <table border="1">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Categoria</th>
                            <th>Precio</th>
                            <th>Stock</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productos.map((p) => (
                            <tr key={p.id}>
                                <td>{p.id}</td>
                                <td>{p.nombre}</td>
                                <td>{p.categoria}</td>
                                <td>{p.precio}</td>
                                <td>{p.stock}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default App