// eslint-disable-next-line
import React from 'react';

function Main (){
    return (
        <div class="container mt-2">
            <h2>Enter the Shop Code</h2>
            <div class="d-flex justify-content-center align-items-center p-5">
                <form>
                    <input type="text" placeholder="*Shop code " />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
}
export default Main;