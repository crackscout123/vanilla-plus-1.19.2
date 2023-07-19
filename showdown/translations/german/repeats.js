"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var repeats_exports = {};
__export(repeats_exports, {
  translations: () => translations
});
module.exports = __toCommonJS(repeats_exports);
const translations = {
  strings: {
    "Repeated phrases in ${room.title}": "Wiederholte Ausdr\xFCcke in ${room.title}",
    "There are no repeated phrases in ${room.title}.": "Es liegen keine wiederholten Ausdr\xFCcke in ${room.title} vor.",
    "Action": "Vorgang",
    "Phrase": "Ausdruck",
    "Identifier": "Kennzeichnung",
    "Interval": "Zeitspanne",
    "every ${minutes} minute(s)": "jede ${minutes} Minute(n)",
    "Raw text": "Rohtext",
    "every ${messages} chat message(s)": "",
    "Remove": "Entfernen",
    "Remove all repeats": "Entferne alle Wiederholungen",
    "Repeat names must include at least one alphanumeric character.": "",
    "You must specify an interval as a number of minutes or chat messages between 1 and 1440.": "Du musst eine Zeitspanne (oder Chat-Nachrichten) als eine Zahl zwischen 1 und 1440 angeben.",
    'The phrase labeled with "${id}" is already being repeated in this room.': 'Der Ausdruck "${id}" wird bereits im Raum wiederholt.',
    '${user.name} set the phrase labeled with "${id}" to be repeated every ${interval} minute(s).': '${user.name} hat eingestellt, dass der Ausdruck "${id}" jede ${interval} Minute(n) wiederholt wird.',
    '${user.name} set the phrase labeled with "${id}" to be repeated every ${interval} chat message(s).': '${user.name} hat eingestellt, dass der Ausdruck "${id}" jede ${interval} Chat-Nachrichte(n) wiederholt wird.',
    '${user.name} set the Room FAQ "${topic}" to be repeated every ${interval} minute(s).': '${user.name} hat eingestellt, dass der Raum-FAQ "${topic}" jede ${interval} Minute(n) wiederholt wird.',
    '${user.name} set the Room FAQ "${topic}" to be repeated every ${interval} chat message(s).': '${user.name} hat eingestellt, dass der Raum-FAQ "${topic}" jede ${interval} Chat-Nachrichte(n) wiederholt wird.',
    'The phrase labeled with "${id}" is not being repeated in this room.': 'Der Ausdruck "${id}" wird gerade nicht in diesem Raum wiederholt.',
    'The text for the Room FAQ "${topic}" is already being repeated.': 'Der Text f\xFCr den Raum-FAQ "${topic}" wird bereits wiederholt.',
    '${user.name} removed the repeated phrase labeled with "${id}".': '${user.name} hat den sich wiederholenden Ausdruck "${id}" entfernt.',
    "There are no repeated phrases in this room.": "Es gibt keine wiederholten Ausdr\xFCcke in diesem Raum.",
    "${user.name} removed all repeated phrases.": "${user.name} hat alle wiederholten Ausdr\xFCcke entfernt.",
    "You must specify a room when using this command in PMs.": "Du musst einen Raum angeben, falls du diesen Befehl in einer privaten Nachricht verwendest."
  }
};
//# sourceMappingURL=repeats.js.map
