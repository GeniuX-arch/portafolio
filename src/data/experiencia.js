import {icons} from './icons'
import crudPHP from '../assets/proyectos/crudPHP.png'
import proyectoAdministrativo from '../assets/proyectos/ProyectoAdministrativo.png'
import grafo from '../assets/proyectos/Grafo.jpg'

export const proyectos = [
    {
        titulo:'CRUD con PHP',
        descripcion:'Este proyecto consiste en el desarrollo de un sistema de administración de usuarios basado en PHP y MySQL, proporcionando operaciones CRUD (Crear, Leer, Actualizar y Eliminar). Este sistema permitirá a los administradores gestionar eficientemente la información de usuarios en una aplicación web.',
        title: 'CRUD with PHP',
        description: 'This project involves the development of a user management system based on PHP and MySQL, providing CRUD operations (Create, Read, Update, Delete). This system will allow administrators to efficiently manage user information in a web application.',
        imagen:crudPHP,
        tecnologias:icons.filter(value=>
         value.name=="HTML"|| value.name=='Tailwind'|| value.name=="MySQL" || value.name=="PHP" ),
        url:'https://github.com/GeniuX-arch/crud-php'

    },
    {
        titulo:'Pagina administrativa',
        descripcion:'Este proyecto se centra en el desarrollo de una página web administrativa diseñada para simplificar y mejorar la gestión de tareas en entornos profesionales. la plataforma proporcionará una interfaz intuitiva y eficiente que permitirá a los equipos colaborar de manera efectiva, asignar tareas y realizar un seguimiento del progreso de los proyectos.',
        title: 'Administrative Page',
        description: 'This project focuses on the development of an administrative web page designed to simplify and enhance task management in professional environments. The platform will provide an intuitive and efficient interface that enables teams to collaborate effectively, assign tasks, and track project progress.',

        imagen:proyectoAdministrativo,
        tecnologias:icons.filter(value=>
            value.name=="React.js" || value.name=="Tailwind" ||
            value.name=="Node.js" || value.name=="MySQL" || value.name=="JavaScript"
        ),
        url:'https://github.com/GeniuX-arch/paginaweb-administrativa'
    },
    {
        titulo:'Encontrar el camino más corto de un Grafo',
        descripcion:'Este codigo elaborado en java sirve para buscar el camino más corto entre dos puntos de un grafo, se utiliza funciones con recurcividad las cuales son muy efectivas cuando no contamos el numero de instrucciones en una función, por ultimo y más importante este codigo fue hecho con mi logica en programación, sin usar otros medios.',

        title: 'Finding the Shortest Path in a Graph',
        description: 'This Java code is designed to find the shortest path between two points in a graph. It uses recursive functions, which are very effective when the number of instructions in a function is not known. Finally, and most importantly, this code was created using my logic in programming, without relying on other resources.',

        imagen:grafo,
        tecnologias:icons.filter(value=>
            value.name=="Java" 
        ),
        url:'https://github.com/GeniuX-arch/grafos',
    }




]