/**
 * Об'єкти
 *
 * - Методи об'єкта
 * - Доступ до властивостей об'єкта через this
 * - Зміна за посиланням
 */

const playlist = {
  name: "My amazing playlist",
  rating: 5,
  tracks: ["track-1", "track-2", "track-3"],
  changeName(newName) {
    // this - це посилання на обʼєкт, який викликає функцію (метод) - стає тим обʼєктом, який виклика ф-цію
    // значення this стає відомим тільки тоді коли ви викликаєте фукнцію
    // console.log(this);
    this.name = newName;
  },
  addTrack(track) {
    // console.log(this);
    this.tracks.push(track);
  },
  updateRating(newRating) {
    this.rating = newRating;
  },
  getTrackCount() {
    return this.tracks.length;
  },
};

// console.log(playlist);
playlist.changeName("Lofi tracks");
playlist.addTrack("track-4");
playlist.updateRating(4);
console.log(playlist.getTrackCount());
console.log(playlist);
