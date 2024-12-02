function Hello(props) {
  return (
    <div>
      <h1>Seat Numbers : {props.seatNumbers}</h1>
      <h1>
        Human : {props.human.name}, {props.human.msg},{props.human.emoji},
        {props.human.seatNumbers}
      </h1>
    </div>
  );
}

export default Hello;
