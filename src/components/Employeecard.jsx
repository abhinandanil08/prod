import Styles from './Employeecard.module.css';
function Employeecard(props)
{
    return(
        <div className={Styles.card}>
            <div className={Styles.cp}><img id={Styles.wow} src={props.cp} alt="" /></div>
            <div className={Styles.avatar}><img src={props.avatar} alt="" /></div>
            <hr />
            <div className={Styles.id}>Id: {props.id}</div>
            <div className={Styles.name}>Name: {props.name}</div>       
            <div className={Styles.email}>Email: {props.email}</div>
            <hr />
            <div className={Styles.age}>Age: {props.age}</div>
            <div className={Styles.city}>City: {props.city}</div>
            <div className={Styles.country}>Country: {props.country}</div>
            <div className={Styles.status}>Status: {props.status}</div>
            <div className={Styles.skills}>Skills: {props.skills}</div>
            <div className={Styles.hobby}>Hobby: {props.hobby}</div>
            <hr />
            <div className={Styles.pp}><img src={props.pp} alt="" /></div> 
            <div className={Styles.fp}><img src={props.fp} alt="" /></div>
           
        </div>
    );       

}

export default Employeecard;