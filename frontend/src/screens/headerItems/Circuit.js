
const Circuit=({name})=>{
    const style2 = {
        backgroundImage: "url('img/zagh/0.jpg')",
      };
    return(
        <a href="single.html" class="item">
        <div class="sq_parent">
          <div class="sq_wrap">
            <div class="sq_content image" style={style2}></div>
            <span>{name}</span>
          </div>
        </div>
      </a>
    )
}
export default Circuit;