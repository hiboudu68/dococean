import grosseBatterie from "./assets/batterie-grosse.png";
import petiteBatterie from "./assets/battery.png";
import coeur from "./assets/heart.png";
import ClickImg from "./ClickImgmlkpdsjsj";

function SpamClickkjndomp() {
    return (
        <div style={{ height: '100vh', backgroundColor: '#55AAC9', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <h1 style={{fontFamily: 'Jolly Lodger, sans-serif', fontSize: '50px'}}>Enlever les batteries</h1>
            <div style={{ display: "flex", alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ position: "relative", backgroundImage: `url(${coeur})`, width: '1700px', height: '900px', backgroundSize: 'cover', display: "flex", flexDirection: "row" }}>
                    <ClickImg img={grosseBatterie} width={400} top={'50%'} left={'60%'}/>
                    <ClickImg img={petiteBatterie} width={300} top={'65%'} left={'40%'}/>
                    <ClickImg img={grosseBatterie} width={200} top={'30%'} left={'43%'}/>
                </div>
            </div>
        </div>
    );
}
export default SpamClickkjndomp;