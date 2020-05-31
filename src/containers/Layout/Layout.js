import React, { Fragment, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Toolbar from '../Toolbar/Toolbar';
import Modal from '../../UI/Modal/Modal';
import * as actions from '../../store/actions/index';


const Layout = ( props ) => {

    const dispatch = useDispatch();

    const isModalOpen = useSelector(state => state.general.isModalOpen);
    const onCloseModal = useCallback(() => dispatch(actions.closeModal()), [dispatch]);

    return(
        <Fragment>
            <Toolbar/>
            {isModalOpen ? <Modal closeModal={onCloseModal} /> : null}
            <main>
                {props.children}
            </main>
        </Fragment>
    );
}

export default Layout;