var burners_and_earners = require('../burners_and_earners');
var assert = require('assert');

var Walter = "Walter sent: Hello. I’ve got Faceblock and Instantgam. I’m too old for the other ones.";
var Jesse = "Jesse sent: Yo! I’ve got ‘em all. Tooter, Faceblock, Instantgam, Snaptalk, LankedOn.";
var Saul = "Saul sent: I’m on LankedOn for Business. And I have an Instantgam account for my cats. Oh, and Faceblock for my ex-husbands.";
var Gus = "Gus sent: I use Tooter and Instantgam. My customers aren’t on the others, so I can’t get them to engage with my brand there.";


var dataOne =  "Walter sent: It was 67MB. Is that everything? I’m busy, you know.";
var dataTwo = "Jesse sent: “Damn, it was like 300MB. Dat Snaptalk is a data hog, yo.";
var dataThree = "Saul sent: I think 283MB. That’s what the guy at the store said. I think it means MegaBites.";
var dataFour= "Gus sent: Around 150MB. I have the receipts if you need more precise figures.";


describe('Cell kata', function() {
  it('should return apps used by walter', function() {
    assert.deepEqual(burners_and_earners.applications(Walter), ["Faceblock", "Instantgam"]);
  });
  it('should return apps used by Jesse', function() {
    assert.deepEqual(burners_and_earners.applications(Jesse), ["Tooter", "Faceblock", "Instantgam", "Snaptalk", "LankedOn"]);
  });
  it('should return apps used by Saul', function() {
    assert.deepEqual(burners_and_earners.applications(Saul), ["LankedOn", "Instantgam", "Faceblock"]);
  });
  it('should return apps used by Gus', function() {
    assert.deepEqual(burners_and_earners.applications(Gus), ["Tooter", "Instantgam"]);
  });


  // it('should return the user who uses most data', function() {
  //   assert.equal(userInfo(), "Jesse");
  // });
  // it('should return Who uses the least data', function() {
  //   assert.equal(userInfo(), "Gus")
  // });
  // it('should return Who uses the most apps', function() {
  //   assert.deepEqual(userInfo(), ["Tooter", "Faceblock", "Instantgam", "Snaptalk", "LankedOn"]);
  //   "Gus"
  //   it('should return Who uses Faceblock', function() {
  //     assert.deepEqual(userInfo(), ["Gus", "Jesse", "Walter"]);
  //   });
  //   it('should return Who doesn’t use Faceblock', function() {
  //     assert.equal(userInfo(), "Saul");
  //
  //   });
  //   it('should return how much data each app uses. Use the data ratios from our friend at the network', function() {
  //
  //   });
  // });
});
