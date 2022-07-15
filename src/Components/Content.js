import ItemList from "./ItemList";

function Content({items,handleCheck,handleDelete}) {
 
  return (
    <main>
        {items.length?(
      <ItemList items={items}
      handleCheck={handleCheck}
      handleDelete={handleDelete} />
    ):(
        <p style={{marginTop:'2rem',fontSize:'1.3rem'}}>Empty List</p>
    )}
    </main>
  );
}

export default Content;
