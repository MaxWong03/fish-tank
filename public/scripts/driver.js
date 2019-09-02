$(() => {

  window.fishtank = new Fishtank('fishtank');             // making it global to make debugging 1% easier.  shhhh.
  window.fishtank.registerSpecies(SwitchFish, GoFish, BiteFish);
  var starter = new Starter({
    tank: window.fishtank,     // look, it's Dependency Injection!  Pretend you care!
    position: new Vector(0, 0)
  });
  let pyu = new Pyu({
    tank: window.fishtank,
    position: new Vector(90,-30)
  });
  let octillery = new Octillery({
    tank: window.fishtank,
    position: new Vector(160,-15)
  });
  let tentacrool = new Tentacrool({
    tank: window.fishtank,
    position: new Vector(260, 0)
  });

});



