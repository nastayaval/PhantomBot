$.lang.register('bettingsystem.open.usage', 'Usage: !bet open ["title"] ["options"] [minimum bet] [maximum bet] [close timer mins]');
$.lang.register('bettingsystem.open.error', 'You must chose a winning option on the previous bet before you can open a new one. !bet close [option]');
$.lang.register('bettingsystem.open.error.opened', 'A bet is already opened.');
$.lang.register('bettingsystem.open.success', 'A bet is now opened! "$1". Bet options: "$2". Bet with: !bet [amount] [option]');
$.lang.register('bettingsystem.close.error.usage', 'The bet is now closed! Waiting on winning result. !bet close [winning option]');
$.lang.register('bettingsystem.close.usage', 'Usage: !bet close [winning option]');
$.lang.register('bettingsystem.close.success', 'Bet is now closed! Calculating results and giving points to the winners!');
$.lang.register('bettingsystem.close.semi.success', 'The bet is now closed! Waiting on a winning option.');
$.lang.register('bettingsystem.close.success.winners', 'A total of $1 people won this bet! And a total of $2 was won!');
$.lang.register('bettingsystem.save.format', 'Title: "$1", Options: "$2", Total Bets: $3, Total Entries: $4, Points Won: $5.');
$.lang.register('bettingsystem.global.usage', 'Usage: !bet [open / close / save / saveformat / lookup / togglemessages / gain]');
$.lang.register('bettingsystem.bet.usage', 'Usage: !bet [amount] [option]');
$.lang.register('bettingsystem.bet.error.neg', 'You cannot bet negative $1!');
$.lang.register('bettingsystem.bet.error.min', 'The minimum bet you can place is $1.');
$.lang.register('bettingsystem.bet.error.max', 'The maximum bet you can place is $1.');
$.lang.register('bettingsystem.bet.error.points', 'You don\'t have enough $1 to bet that much.');
$.lang.register('bettingsystem.bet.betplaced', 'You already placed a bet of $1 on $2.');
$.lang.register('bettingsystem.bet.null', 'That is not a valid bet option.');
$.lang.register('bettingsystem.toggle.save', 'Betting results will $1 be saved after closing a bet.');
$.lang.register('bettingsystem.warning.messages', 'Warning messages will $1 be diplayed in chat.');
$.lang.register('bettingsystem.saveformat.usage', 'Usage: !bet saveformat [date format] - Default is yy.M.dd');
$.lang.register('bettingsystem.saveformat.set', 'Save format has been changed to $1.');
$.lang.register('bettingsystem.gain.usage', 'Usage: !bet gain [percent]');
$.lang.register('bettingsystem.gain.set', 'Gain percent has been set to $1%');
$.lang.register('bettingsystem.lookup.usage', 'Usage: !bet lookup [$1]');
$.lang.register('bettingsystem.lookup.show', 'Bet from [$1] $2');
$.lang.register('bettingsystem.lookup.null', 'No bets were made on that day.');
$.lang.register('bettingsystem.now', 'now');
$.lang.register('bettingsystem.not', 'not');
