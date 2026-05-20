function VariantSelector({ variants }){

return(

<div>

<h3>Select Variant</h3>

{

variants?.map((item,index)=>(

<div
key={index}
style={{
border:"1px solid gray",
margin:"10px",
padding:"10px"
}}
>

<p>Size: {item.size}</p>

<p>Color: {item.colorName}</p>

<p>Stock: {item.stock}</p>

</div>

))

}

</div>

);

}

export default VariantSelector;