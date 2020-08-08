import React from 'react';

function Home ({ onSubmit }){
    let shopId;
    return (
        <div className="container mt-2">
            <h2>Enter the Shop Code</h2>
            <div className="d-flex justify-content-center align-items-center p-5">
                <form onSubmit={e=>{
                    e.preventDefault();
                    if(!shopId.value.trim())
                        return
                    onSubmit(shopId.value);
                    shopId.value='';
                }}>
                    <input type="text" placeholder="*Shop code " ref={input => (shopId=input)}/>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
}
export default Home;