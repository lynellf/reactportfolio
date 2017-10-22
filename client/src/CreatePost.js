import React from 'react';
import Header from './header';
import Footer from './footer';

export default class CreatePost {
    constructor(props) {
        super();
        this.state = {
        }
        render() {
            return(
                <div>
                    <Header/>
                    <div>
                        <form>
                            <div>
                                <h4>Add New Post</h4>
                                <input type="text" />
                            </div>
                            <div>
                                <textaea/>
                            </div>
                        </form>
                    </div>
                    <Footer/>
                </div>
            );
        }
    }
}