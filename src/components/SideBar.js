import React from 'react'
import { Link } from 'react-router-dom'

export default function SideBar() {
    return (
        <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

			
			<Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
				<div className="sidebar-brand-icon">
					<img className="w-100" src="assets/images/logoParte.png" alt="Digital House"/>
				</div>
			</Link>

			
			<hr className="sidebar-divider my-0"/>

			
			{/* <li className="nav-item active">
				<a className="nav-link" href="/">
					<i className="fas fa-fw fa-tachometer-alt"></i>
					<span>Dashboard - DH movies</span></a>
			</li> 

			
			<hr className="sidebar-divider"/>

		
			<div className="sidebar-heading">Actions</div>*/}

			
			<li className="nav-item">
				<Link className="nav-link collapsed" to="/totalProducts">
					<i className="fas fa-fw fa-folder"></i>
					<span>Total De Productos</span>
				</Link>
			</li>

			
			<li className="nav-item">
				<Link className="nav-link" to="/totalUsers">
					<i className="fas fa-fw fa-chart-area"></i>
					<span>Total de usuarios</span>
				</Link>
			</li>

			
			<li className="nav-item">
				<a className="nav-link" href="/">
					<i className="fas fa-fw fa-table"></i>
					<span>Tables</span></a>
			</li>

			
			<hr className="sidebar-divider d-none d-md-block"/>
		</ul>
    )
}
