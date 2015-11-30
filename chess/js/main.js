$(function() {
  init();
  console.log("Main Init Called");
});

function InitFilesRankBrd() {

  var index = 0;
  var file = FILES.FILE_A;
  var rank = RANKS.RANK_1;
  var sq = SQUARES.A1;

  for (index = 0; index < BRD_SQ_NUM; ++index) {
    FilesBrd[index] = SQUARES.OFFBOARD;
    RanksBrd[index] = SQUARES.OFFBOARD;
  }
    // for each rank
  for (rank = RANKS.RANK_1; rank <= RANKS.RANK_8; ++rank) {
      // for each file
    for (file = FILES.FILE_A; file <= FILES.FILE_H; ++file) {
      // get the square
      sq = FR2SQ(file,rank);
      // sets approriate file and rank for that square
      FilesBrd[sq] = file;
      RanksBrd[sq] = rank;
    }
  }

  console.log("FilesBrd[0]:" + FilesBrd[0] + " RanksBrd[0]:" + RanksBrd[0]);
  console.log("FilesBrd[SQUARES.A1]:" + FilesBrd[SQUARES.A1] + " RanksBrd[SQUARES.A1]:" + RanksBrd[SQUARES.A1]);
  console.log("FilesBrd[SQUARES.E8]:" + FilesBrd[SQUARES.E8] + " RanksBrd[SQUARES.E8]:" + RanksBrd[SQUARES.E8]);
}

function InitHashKeys() {
  var index = 0;

  for (index = 0; index < 14 * 120; ++index) {
    PieceKeys[index] = RAND_32();
  }

  SideKey = RAND_32();

  for (index = 0; index < 16; ++index) {
    CastleKeys[index] = RAND_32();
  }
}

function InitSq120To64() {

	var index = 0;
	var file = FILES.FILE_A;
	var rank = RANKS.RANK_1;
	var sq = SQUARES.A1;
	var sq64 = 0;

	for(index = 0; index < BRD_SQ_NUM; ++index) {
		Sq120ToSq64[index] = 65;
	}

	for(index = 0; index < 64; ++index) {
		Sq64ToSq120[index] = 120;
	}

	for(rank = RANKS.RANK_1; rank <= RANKS.RANK_8; ++rank) {
		for(file = FILES.FILE_A; file <= FILES.FILE_H; ++file) {
			sq = FR2SQ(file,rank);
      // for first index, Sq64ToSq120 is equal to 21
			Sq64ToSq120[sq64] = sq;
      // at value of 21, set sq64 to 0
			Sq120ToSq64[sq] = sq64;
      // increment sq64 from 0-63
			sq64++;
		}
	}

}

function init() {
  console.log("init() called");
  InitFilesRankBrd();
  InitHashKeys();
  InitSq120To64();
}
