//  Given a number of rounds n, return all the possible rock-paper-scissors play possibilities for that number of rounds.

function rockPaperPermutation (roundCount) {
  const results = [];
  const rps = ['r', 'p', 's'];
  
  if(!roundCount) {
    return results;
  }
  
  letsPlay('');  // start with the empty string
  return results;
  
  function letsPlay(plays) {
    if(plays.length === roundCount) {
      results.push(plays);  // when each string is the same length
      return;             // as the count, push the string and return
    }
    for(let i = 0; i < rps.length; i++) { //loops through the rps array
      letsPlay(plays + rps[i]);   //running each possible rps plus the existing
    }                             // string recursively.
  }
}

rockPaperPermutation(3); // =>  [ 'rrr', 'rrp', 'rrs', 'rpr', 'rpp', 'rps', 'rsr', 'rsp',
//  'rss', 'prr', 'prp', 'prs', 'ppr', 'ppp', 'pps', 'psr', 'psp', 'pss', 'srr', 'srp',
//  'srs', 'spr', 'spp', 'sps', 'ssr', 'ssp', 'sss' ]
