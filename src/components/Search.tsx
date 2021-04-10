import React, { FunctionComponent } from 'react';

const Search: FunctionComponent = ()=> {
    return (
        <>
              
            <div className="form-main">
                <div className="container">
                    <div className="form-content form-content1 w-100 transparent p-0 shadow-none position-relative">
                        <div className="form-navtab text-center">
                            <ul className="nav nav-tabs">
                                <li className="active"><a data-toggle="tab" href="#Covoiturage"><i className="fa fa-car"></i> Covoiturage</a></li>
                                <li><a data-toggle="tab" href="#Autocar"><i className="fa fa-bus"></i> Autocar</a></li>


                            </ul>
                        </div>    

                        <div className="tab-content">
                            <div id="Covoiturage" className="tab-pane">
                                <div className="row d-flex align-items-center justify-content-between">
                                    <div className="col-lg">
                                        <div className="form-group mb-0">
                                            <label>Départ</label>
                                            <div className="input-box">
                                                <i className="flaticon-placeholder"></i>
                                                <select className="niceSelect">
                                                    <option value="1">Parakou</option>
                                                    <option value="2">Cotonou</option>
                                                    <option value="3">Ouidah</option>
                                                    <option value="4">Tanguieta</option>
                                                    <option value="5">Bassila</option>

                                                </select>
                                            </div>                            
                                        </div>
                                    </div>
                                    <div className="col-lg">
                                        <div className="form-group mb-0">
                                            <label>Destination</label>
                                            <div className="input-box">
                                                <i className="flaticon-placeholder"></i>
                                                <select className="niceSelect">
                                                    <option value="1">Bassila</option>
                                                    <option value="2">Cotonou</option>
                                                    <option value="3">Ouidah</option>
                                                    <option value="4">Tanguieta</option>
                                                    <option value="5">Parakou</option>
                                                    <option value="5">Bassila</option>

                                                </select>
                                            </div>                            
                                        </div>
                                    </div>
                                    <div className="col-lg">
                                        <div className="form-group mb-0">
                                            <label>Date</label>
                                            <div className="input-box">
                                                <i className="flaticon-calendar"></i>
                                                <input id="date-range1" type="text" placeholder="yyyy-mm-dd"/>
                                            </div>                            
                                        </div>
                                    </div>
                                    <div className="col-lg">
                                        <div className="form-group mb-0">
                                            <label>Passager</label>
                                            <div className="input-box">
                                                <i className="flaticon-add-user"></i>
                                                <select className="niceSelect">
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                </select>
                                            </div>                             
                                        </div>
                                    </div>
                                    <div className="col-lg">
                                        <div className="form-group mb-0 mt-3">
                                            <a href="destination-list.html" className="nir-btn w-100"><i className="fa fa-search mr-2"></i>  Recherche</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="Autocar" className="tab-pane in active">
                                <div className="row d-flex align-items-center justify-content-between">
                                    <div className="col-lg">
                                        <div className="form-group mb-0">
                                            <label> Départ</label>
                                            <div className="input-box">
                                                <i className="flaticon-placeholder"></i>
                                                <select className="niceSelect">
                                                    <option value="1">Bassila</option>
                                                    <option value="2">Cotonou</option>
                                                    <option value="3">Ouidah</option>
                                                    <option value="4">Tanguieta</option>
                                                    <option value="5">Parakou</option>
                                                </select>
                                            </div>                            
                                        </div>
                                    </div>

                                    <div className="col-lg">
                                        <div className="form-group mb-0">
                                            <label> Destination</label>
                                            <div className="input-box">
                                                <i className="flaticon-placeholder"></i>
                                                <select className="niceSelect">
                                                    <option value="1">Parakou</option>
                                                    <option value="2">Cotonou</option>
                                                    <option value="3">Ouidah</option>
                                                    <option value="4">Tanguieta</option>
                                                    <option value="5">Bassila</option>
                                                </select>
                                            </div>                            
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg">
                                        <div className="form-group mb-0">
                                            <label>Date</label>
                                            <div className="input-box">
                                                <i className="flaticon-calendar"></i>
                                                <input id="date-range2" type="text" placeholder="yyyy-mm-dd"/>
                                            </div>                            
                                        </div>
                                    </div>

                                    <div className="col-lg">
                                        <div className="form-group mb-0">
                                            <label>Passager</label>
                                            <div className="input-box">
                                                <i className="flaticon-add-user"></i>
                                                <select className="niceSelect">
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                </select>
                                            </div>                             
                                        </div>
                                    </div>
                                    <div className="col-lg">
                                        <div className="form-group mb-0 mt-3">
                                            <a href="destination-list.html" className="nir-btn w-100"><i className="fa fa-search mr-2"></i>Recherche</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      
        </>
    )
}



export default Search
