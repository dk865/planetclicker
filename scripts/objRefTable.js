const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Spritefont2,
		C3.Behaviors.Fade,
		C3.Plugins.Sprite,
		C3.Behaviors.Sin,
		C3.Behaviors.Persist,
		C3.Behaviors.destroy,
		C3.Plugins.Touch,
		C3.Plugins.Mouse,
		C3.Plugins.Button,
		C3.Behaviors.Platform,
		C3.Behaviors.Timer,
		C3.Plugins.Browser,
		C3.Plugins.Audio,
		C3.Plugins.Keyboard,
		C3.Behaviors.Physics,
		C3.Plugins.Date,
		C3.Plugins.Clipboard,
		C3.Plugins.Arr,
		C3.Plugins.TextBox,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Button.Acts.SetText,
		C3.Plugins.Spritefont2.Acts.TypewriterText,
		C3.Plugins.Spritefont2.Exps.Text,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Behaviors.Timer.Acts.StartTimer,
		C3.Plugins.System.Acts.SetBoolVar,
		C3.Plugins.Spritefont2.Cnds.OnTypewriterTextFinished,
		C3.Behaviors.Fade.Acts.SetFadeInTime,
		C3.Plugins.Sprite.Acts.SetVisible,
		C3.Behaviors.Fade.Acts.RestartFade,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.Touch.Cnds.OnTapGestureObject,
		C3.Plugins.System.Cnds.CompareBoolVar,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.Touch.Exps.X,
		C3.Plugins.Touch.Exps.Y,
		C3.Plugins.System.Acts.SetVar,
		C3.Behaviors.Fade.Acts.SetFadeOutTime,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.Spritefont2.Exps.X,
		C3.Plugins.Spritefont2.Exps.Y,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.System.Exps.random,
		C3.Plugins.Spritefont2.Acts.SetPosToObject,
		C3.Behaviors.Sin.Acts.SetEnabled,
		C3.Plugins.Mouse.Cnds.OnObjectClicked,
		C3.Plugins.Mouse.Exps.X,
		C3.Plugins.Mouse.Exps.Y,
		C3.Plugins.Mouse.Cnds.IsButtonDown,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.System.Acts.WaitForPreviousActions,
		C3.Plugins.Sprite.Cnds.CompareInstanceVar,
		C3.Plugins.Sprite.Acts.Spawn,
		C3.Plugins.Spritefont2.Acts.SetText,
		C3.Plugins.System.Acts.SubVar,
		C3.Plugins.Sprite.Acts.SetInstanceVar,
		C3.Behaviors.Timer.Cnds.IsTimerRunning,
		C3.Behaviors.Timer.Cnds.OnTimer,
		C3.Plugins.Spritefont2.Cnds.CompareInstanceVar,
		C3.Plugins.Spritefont2.Acts.SetVisible,
		C3.Plugins.Spritefont2.Acts.SetInstanceVar,
		C3.Plugins.Spritefont2.Acts.Destroy,
		C3.Behaviors.Fade.Acts.SetWaitTime,
		C3.Plugins.Spritefont2.Acts.SetSize,
		C3.Plugins.Sprite.Cnds.OnAnyAnimFinished,
		C3.Plugins.Mouse.Cnds.OnAnyClick,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.System.Cnds.OnSuspend,
		C3.Plugins.Date.Exps.Now,
		C3.Plugins.System.Cnds.OnResume,
		C3.Plugins.System.Cnds.Compare,
		C3.Plugins.System.Acts.GoToLayoutByName,
		C3.Plugins.System.Acts.LoadState,
		C3.Plugins.Audio.Acts.StopAll,
		C3.Plugins.System.Acts.ResetGlobals,
		C3.Plugins.System.Acts.ResetPersisted,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.System.Exps.regexreplace,
		C3.Plugins.Sprite.Acts.SetAnimFrame,
		C3.Plugins.System.Acts.SaveState,
		C3.Plugins.Touch.Cnds.OnTouchObject,
		C3.Plugins.Browser.Acts.CancelFullScreen,
		C3.Plugins.Browser.Acts.RequestFullScreen,
		C3.Plugins.Audio.Acts.SetSilent,
		C3.Plugins.System.Acts.ToggleBoolVar,
		C3.Plugins.Mouse.Cnds.IsOverObject,
		C3.Plugins.Mouse.Acts.SetCursor,
		C3.Plugins.Spritefont2.Cnds.IsBoolInstanceVarSet,
		C3.Plugins.TextBox.Cnds.CompareText,
		C3.Plugins.TextBox.Acts.SetText,
		C3.Plugins.TextBox.Exps.Text,
		C3.Plugins.System.Acts.LoadStateJSON,
		C3.Plugins.System.Cnds.OnSaveComplete,
		C3.Plugins.System.Exps.savestatejson
	];
};
self.C3_JsPropNameTable = [
	{Time: 0},
	{Fade: 0},
	{Logo: 0},
	{Sine: 0},
	{Persist: 0},
	{Planets: 0},
	{CPSAdded: 0},
	{ClickMultiplier: 0},
	{PriceMultiplier: 0},
	{Price: 0},
	{ONECpsAdded: 0},
	{PriceDisplay: 0},
	{Max: 0},
	{Amm: 0},
	{DestroyOutsideLayout: 0},
	{Coin: 0},
	{Refade: 0},
	{Round: 0},
	{Stars: 0},
	{TypeText: 0},
	{TypewriterText: 0},
	{Touch: 0},
	{Mouse: 0},
	{CoinsText: 0},
	{CPSText: 0},
	{Tooltip: 0},
	{ShopBG: 0},
	{Text: 0},
	{Layout: 0},
	{IsShop: 0},
	{ShopTeleport: 0},
	{Shop: 0},
	{LayoutPortal: 0},
	{PriceText: 0},
	{ONECPSadded: 0},
	{ShopButton: 0},
	{Platform: 0},
	{VariableSetter1: 0},
	{Timer: 0},
	{VariableSetter2: 0},
	{AmmountsAdded: 0},
	{BehindButton: 0},
	{Dummy: 0},
	{Browser: 0},
	{Fullscreen: 0},
	{Audio: 0},
	{Alert: 0},
	{Exit: 0},
	{CoinTextSpawner: 0},
	{Mute: 0},
	{Keyboard: 0},
	{BehindButtonLoad: 0},
	{Planet: 0},
	{UnlockedClick: 0},
	{ShopNum: 0},
	{PlanetText: 0},
	{Deviser: 0},
	{CoinAnim: 0},
	{UnlockPlanet: 0},
	{LayoutPortal2: 0},
	{Physics: 0},
	{fallingCoin: 0},
	{AutoCLICKED: 0},
	{Date: 0},
	{imex: 0},
	{download1: 0},
	{Clipboard: 0},
	{Array: 0},
	{export: 0},
	{import: 0},
	{TextInput: 0},
	{IntroDone: 0},
	{Clickable: 0},
	{Coins: 0},
	{CPS: 0},
	{CoinClickAmmount: 0},
	{OneCPS: 0},
	{PlanetsNum: 0},
	{IsFullscreen: 0},
	{Leaving: 0},
	{Muted: 0},
	{MuteFrame: 0},
	{suspended: 0},
	{unsuspended: 0},
	{jsonSave: 0},
	{TransitioningLoading: 0},
	{Typewritten: 0},
	{totalClicks: 0},
	{seconds: 0},
	{clipboard: 0},
	{jsonSaving: 0},
	{Cheat: 0}
];

self.InstanceType = {
	Logo: class extends self.ISpriteFontInstance {},
	Planets: class extends self.ISpriteInstance {},
	Coin: class extends self.ISpriteInstance {},
	Stars: class extends self.ISpriteInstance {},
	TypewriterText: class extends self.ISpriteFontInstance {},
	Touch: class extends self.IInstance {},
	Mouse: class extends self.IInstance {},
	CoinsText: class extends self.ISpriteFontInstance {},
	CPSText: class extends self.ISpriteFontInstance {},
	ShopBG: class extends self.ISpriteInstance {},
	Text: class extends self.ISpriteFontInstance {},
	LayoutPortal: class extends self.ISpriteFontInstance {},
	ShopButton: class extends self.IButtonInstance {},
	VariableSetter1: class extends self.ISpriteInstance {},
	VariableSetter2: class extends self.ISpriteInstance {},
	AmmountsAdded: class extends self.ISpriteFontInstance {},
	BehindButton: class extends self.ISpriteInstance {},
	Dummy: class extends self.ISpriteInstance {},
	Browser: class extends self.IInstance {},
	Fullscreen: class extends self.ISpriteInstance {},
	Audio: class extends self.IInstance {},
	Alert: class extends self.ISpriteFontInstance {},
	Exit: class extends self.ISpriteInstance {},
	CoinTextSpawner: class extends self.ISpriteInstance {},
	Mute: class extends self.ISpriteInstance {},
	Keyboard: class extends self.IInstance {},
	Price: class extends self.ISpriteFontInstance {},
	BehindButtonLoad: class extends self.ISpriteInstance {},
	UnlockPlanet: class extends self.ISpriteFontInstance {},
	LayoutPortal2: class extends self.ISpriteFontInstance {},
	fallingCoin: class extends self.ISpriteInstance {},
	AutoCLICKED: class extends self.ISpriteFontInstance {},
	Date: class extends self.IInstance {},
	imex: class extends self.ISpriteInstance {},
	download1: class extends self.IButtonInstance {},
	Clipboard: class extends self.IInstance {},
	Array: class extends self.IArrayInstance {},
	export: class extends self.ISpriteFontInstance {},
	import: class extends self.ISpriteFontInstance {},
	TextInput: class extends self.ITextInputInstance {}
}