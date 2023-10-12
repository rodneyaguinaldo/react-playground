import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}

function App() {
  const [showAddFriend, setshowAddFriend] = useState(false);
  const [friendList, setFriendList] = useState(initialFriends);
  const [selectedFriend, setselectedFriend] = useState(null);

  function handleShowAddFriend() {
    showAddFriend ? setshowAddFriend(false) : setshowAddFriend(true);
  }

  function handleAddFriend(friend) {
    let isAdded = false;
    friendList.map((fr) => {
      if (fr.name === friend.name) isAdded = true;
      return null;
    });

    !isAdded
      ? setFriendList((friends) => [...friends, friend])
      : alert("Friend already added!");
    setshowAddFriend(false);
  }

  function handleSelection(friend) {
    // selectedFriend && selectedFriend.name === friend.name
    //   ? setselectedFriend(null)
    //   : setselectedFriend(friend);

    setselectedFriend((cur) => (cur?.id === friend.id ? null : friend));
  }

  function handleSplitBill(value) {
    setFriendList((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setselectedFriend(null);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          friendList={friendList}
          selectedFriend={selectedFriend}
          onSelection={handleSelection}
        />
        {showAddFriend && (
          <FormAddFriend
            friendList={friendList}
            onAddFriend={handleAddFriend}
            style={!showAddFriend && "hide-style"}
          />
        )}
        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "Close" : "Add Friend"}
        </Button>
      </div>
      {selectedFriend && (
        <FormSplitBill
          key={selectedFriend.id}
          onSplitBill={handleSplitBill}
          selectedFriend={selectedFriend}
        />
      )}
    </div>
  );
}

function FriendList({ friendList, selectedFriend, onSelection }) {
  const friends = friendList;
  return (
    <ul>
      {friends.map((friend) => (
        <Friends
          friend={friend}
          key={friend.id}
          selectedFriend={selectedFriend}
          onSelection={onSelection}
        />
      ))}
    </ul>
  );
}

function Friends({ friend, selectedFriend = null, onSelection }) {
  let isSelected = friend.name === selectedFriend?.name;

  return (
    <>
      <li className={isSelected ? "selected" : ""}>
        <img src={friend.image} alt={friend.name} />
        <h3>{friend.name}</h3>
        {friend.balance < 0 && (
          <p className="red">
            You owe {friend.name} ${Math.abs(friend.balance)}
          </p>
        )}
        {friend.balance > 0 && (
          <p className="green">
            Your friend {friend.name} owes you ${Math.abs(friend.balance)}
          </p>
        )}
        {friend.balance === 0 && <p>You and your friend are even!</p>}
        <Button onClick={() => onSelection(friend)}>
          {isSelected ? "Close" : "Select"}
        </Button>
      </li>
    </>
  );
}

function FormAddFriend({ onAddFriend, style }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !image) return;

    const id = crypto.randomUUID();
    const newFriend = {
      id: id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };

    setImage("https://i.pravatar.cc/48");
    setName("");
    onAddFriend(newFriend);
  }

  return (
    <form className={`form-add-friend ${style}`} onSubmit={handleSubmit}>
      <label>Friend name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>Image URL🍤</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <Button>Add</Button>
    </form>
  );
}

function FormSplitBill({ onSplitBill, selectedFriend }) {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const [whosIsPaying, setWhosIsPaying] = useState("");
  const friendExpense = bill ? bill - paidByUser : "";

  function handleSubmit(e) {
    e.preventDefault();

    if (!bill || !paidByUser) return;
    onSplitBill(whosIsPaying === "user" ? friendExpense : -paidByUser);
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriend.name}</h2>
      <label>Bill value 🤑</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />
      <label>Your expense 🤑</label>
      <input
        type="text"
        value={paidByUser}
        onChange={(e) =>
          setPaidByUser(
            Number(e.target.value) > bill ? paidByUser : Number(e.target.value)
          )
        }
      />
      <label>{selectedFriend.name}'s expense 🤑</label>
      <input type="text" disabled value={friendExpense} />
      <label>Who is paying the bill?</label>
      <select
        value={whosIsPaying}
        onChange={(e) => setWhosIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
      <Button>Split bill</Button>
    </form>
  );
}

export default App;
