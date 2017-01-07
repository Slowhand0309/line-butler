import {Calendar} from './calendar'
import {Trello} from './trello'
import {Notify} from './notify'

export class Executor {

  constructor() {

  }

  execute() {
    Logger.log('---- execute start ----');
    const notify = new Notify();

    // Notify events for today.
    const cal = new Calendar('$CALENDAR_ID');
    const eventsMessage = cal.getNotifyMessage();
    notify.postSlack(eventsMessage);

    // Notify task for trello.
    const trello = new Trello('$TRELLO_USER', '$TRELLO_KEY', '$TRELLO_TOKEN');
    const tasks = trello.getCardsText('$TRELLO_LISTID');
    notify.postSlack(tasks);
    
    Logger.log('---- execute end ----');
  }
}