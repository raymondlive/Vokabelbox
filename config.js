// Verbindung zu deinem Supabase-Projekt für den Abgleich zwischen deinen Geräten.
// Die Werte findest du in Supabase unter: Project Settings → API (bzw. "API Keys").
// Der öffentliche Schlüssel ("anon public" oder "Publishable key") darf öffentlich sein:
// Wer welche Daten sehen darf, regelt die Datenbank selbst.
window.VOKABEL_SYNC = {
  url: '',      // z. B. 'https://abcdefghijkl.supabase.co'
  anonKey: ''   // der lange öffentliche Schlüssel
};
