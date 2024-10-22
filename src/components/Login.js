import { useState, memo, useContext } from 'react'
import { loggedInUser } from '../App';

function LoginPopup({ handleLoginSubmit }) {

    const [form, setForm] = useState({});

    const user = useContext(loggedInUser);

    const handleUsernameChange = (e) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handlePasswordChange = (e) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log('form', form);
        handleLoginSubmit(form);
    }

    return (
        <div className="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">Login</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleOnSubmit}>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input
                                    type="text"
                                    name='username'
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    onChange={handleUsernameChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input
                                    type="password"
                                    name='password'
                                    className="form-control"
                                    id="exampleInputPassword1"
                                    autoComplete='current-password'
                                    onChange={handlePasswordChange} />
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="submit" className="btn btn-primary" >Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(LoginPopup);