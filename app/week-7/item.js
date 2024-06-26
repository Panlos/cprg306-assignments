const Item = ({ id, name, quantity, category, onSelect }) => {
  return (
    <li
      key={id}
      className="p-4 mb-2 border rounded-lg shadow-md bg-white cursor-pointer hover:bg-blue-200"
      onClick={onSelect}
    >
      <div className="font-bold text-xl text-gray-800 ">{name}</div>
      <div className="text-gray-700">Quantity: {quantity}</div>
      <div className="text-gray-500">Category: {category}</div>
    </li>
  );
};

export default Item;