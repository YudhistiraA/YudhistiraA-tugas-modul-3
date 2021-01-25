import React from 'react'
import Beranda from './beranda';
import TentangSaya from './tentangSaya';
import Karya from './karya';
import Kontak from './kontak';

import Gallery from './pages/Gallery';
import Ling from './pages/lingkung';
import {Switch,Route} from 'react-router-dom'

const Utama = ()=>(
    <switch>
        <Route exact path='/' component={Beranda}/>
        <Route  path='/TentangSaya' component={TentangSaya}/>
        <Route  path='/Karya' component={Karya}/>
        <Route  path='/Kontak' component={Kontak}/>
        <Route path="/gallery" component={Gallery} />
        <Route path="/lingkung" component={Ling} />
    
    </switch>
)

export default Utama

