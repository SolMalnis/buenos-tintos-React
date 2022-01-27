import React from 'react'

export default function ContentRowMovies(props) {
    return (
        <div className="col-md-4 mb-4">
							<div className={props.left}>
								<div className="card-body">
									<div className="row no-gutters align-items-center">
										<div className="col mr-2">
											<div className={props.text}>{props.name}</div>
											<div className="h5 mb-0 font-weight-bold text-gray-800">{props.number}</div>
										</div>
										<div className="col-auto">
											<i className={props.icono}></i>
										</div>
									</div>
								</div>
							</div>
						</div>

    )
}
