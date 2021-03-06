import { Router } from 'express';
import isRaffleOpenMW from '../../../middleware/raffle/isRaffleOpen';
import openRaffleMW from '../../../middleware/raffle/openRaffle';
import drawRafflerMW from '../../../middleware/raffle/drawRaffler';
import drawImmediatelyMW from '../../../middleware/raffle/drawImmediately';
import getRaffleWinnerDataMW from '../../../middleware/raffle/getRaffleWinnerData';
import resetRaffleMW from '../../../middleware/raffle/resetRaffle';
import closeRaffleMW from '../../../middleware/raffle/closeRaffle';
import announceRaffleWinnerMW from '../../../middleware/raffle/announceRaffleWinner';

const routing = Router();

routing.get('/isopen',
  isRaffleOpenMW());

routing.post('/open',
  openRaffleMW());

routing.get('/draw',
  drawRafflerMW(),
  getRaffleWinnerDataMW());

routing.get('/drawimmediately',
  drawImmediatelyMW(),
  getRaffleWinnerDataMW());

routing.delete('/reset',
  resetRaffleMW());

routing.delete('/close',
  closeRaffleMW());

routing.put('/announce/:name',
  announceRaffleWinnerMW());

export default routing;
