/**
 * GQLESS AUTO-GENERATED CODE: PLEASE DO NOT MODIFY MANUALLY
 */

import { ScalarsEnumsHash, SchemaUnionsKey } from "gqless"

export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
	[K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
	{ [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
	{ [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
	ID: string
	String: string
	Boolean: boolean
	Int: number
	Float: number
	Json: any
	/** ISO 3166-1 alpha-2 country code */
	CountryCode: string
	/** 8 digit long date integer (YYYYMMDD). Unknown dates represented by 0. E.g. 2016: 20160000, May 1976: 19760500 */
	FuzzyDateInt: number
}

/** User sort enums */
export enum UserSort {
	ID = "ID",
	ID_DESC = "ID_DESC",
	USERNAME = "USERNAME",
	USERNAME_DESC = "USERNAME_DESC",
	WATCHED_TIME = "WATCHED_TIME",
	WATCHED_TIME_DESC = "WATCHED_TIME_DESC",
	CHAPTERS_READ = "CHAPTERS_READ",
	CHAPTERS_READ_DESC = "CHAPTERS_READ_DESC",
	SEARCH_MATCH = "SEARCH_MATCH",
}

/** The language the user wants to see media titles in */
export enum UserTitleLanguage {
	/** The romanization of the native language title */
	ROMAJI = "ROMAJI",
	/** The official english title */
	ENGLISH = "ENGLISH",
	/** Official title in it's native language */
	NATIVE = "NATIVE",
	/** The romanization of the native language title, stylised by media creator */
	ROMAJI_STYLISED = "ROMAJI_STYLISED",
	/** The official english title, stylised by media creator */
	ENGLISH_STYLISED = "ENGLISH_STYLISED",
	/** Official title in it's native language, stylised by media creator */
	NATIVE_STYLISED = "NATIVE_STYLISED",
}

/** Notification type enum */
export enum NotificationType {
	/** A user has sent you message */
	ACTIVITY_MESSAGE = "ACTIVITY_MESSAGE",
	/** A user has replied to your activity */
	ACTIVITY_REPLY = "ACTIVITY_REPLY",
	/** A user has followed you */
	FOLLOWING = "FOLLOWING",
	/** A user has mentioned you in their activity */
	ACTIVITY_MENTION = "ACTIVITY_MENTION",
	/** A user has mentioned you in a forum comment */
	THREAD_COMMENT_MENTION = "THREAD_COMMENT_MENTION",
	/** A user has commented in one of your subscribed forum threads */
	THREAD_SUBSCRIBED = "THREAD_SUBSCRIBED",
	/** A user has replied to your forum comment */
	THREAD_COMMENT_REPLY = "THREAD_COMMENT_REPLY",
	/** An anime you are currently watching has aired */
	AIRING = "AIRING",
	/** A user has liked your activity */
	ACTIVITY_LIKE = "ACTIVITY_LIKE",
	/** A user has liked your activity reply */
	ACTIVITY_REPLY_LIKE = "ACTIVITY_REPLY_LIKE",
	/** A user has liked your forum thread */
	THREAD_LIKE = "THREAD_LIKE",
	/** A user has liked your forum comment */
	THREAD_COMMENT_LIKE = "THREAD_COMMENT_LIKE",
	/** A user has replied to activity you have also replied to */
	ACTIVITY_REPLY_SUBSCRIBED = "ACTIVITY_REPLY_SUBSCRIBED",
	/** A new anime or manga has been added to the site where its related media is on the user's list */
	RELATED_MEDIA_ADDITION = "RELATED_MEDIA_ADDITION",
}

/** Media list scoring type */
export enum ScoreFormat {
	/** An integer from 0-100 */
	POINT_100 = "POINT_100",
	/** A float from 0-10 with 1 decimal place */
	POINT_10_DECIMAL = "POINT_10_DECIMAL",
	/** An integer from 0-10 */
	POINT_10 = "POINT_10",
	/** An integer from 0-5. Should be represented in Stars */
	POINT_5 = "POINT_5",
	/** An integer from 0-3. Should be represented in Smileys. 0 => No Score, 1 => :(, 2 => :|, 3 => :) */
	POINT_3 = "POINT_3",
}

/** Media type enum, anime or manga. */
export enum MediaType {
	/** Japanese Anime */
	ANIME = "ANIME",
	/** Asian comic */
	MANGA = "MANGA",
}

/** The format the media was released in */
export enum MediaFormat {
	/** Anime broadcast on television */
	TV = "TV",
	/** Anime which are under 15 minutes in length and broadcast on television */
	TV_SHORT = "TV_SHORT",
	/** Anime movies with a theatrical release */
	MOVIE = "MOVIE",
	/** Special episodes that have been included in DVD/Blu-ray releases, picture dramas, pilots, etc */
	SPECIAL = "SPECIAL",
	/** (Original Video Animation) Anime that have been released directly on DVD/Blu-ray without originally going through a theatrical release or television broadcast */
	OVA = "OVA",
	/** (Original Net Animation) Anime that have been originally released online or are only available through streaming services. */
	ONA = "ONA",
	/** Short anime released as a music video */
	MUSIC = "MUSIC",
	/** Professionally published manga with more than one chapter */
	MANGA = "MANGA",
	/** Written books released as a series of light novels */
	NOVEL = "NOVEL",
	/** Manga with just one chapter */
	ONE_SHOT = "ONE_SHOT",
}

/** The current releasing status of the media */
export enum MediaStatus {
	/** Has completed and is no longer being released */
	FINISHED = "FINISHED",
	/** Currently releasing */
	RELEASING = "RELEASING",
	/** To be released at a later date */
	NOT_YET_RELEASED = "NOT_YET_RELEASED",
	/** Ended before the work could be finished */
	CANCELLED = "CANCELLED",
	/** Version 2 only. Is currently paused from releasing and will resume at a later date */
	HIATUS = "HIATUS",
}

export enum MediaSeason {
	/** Months December to February */
	WINTER = "WINTER",
	/** Months March to May */
	SPRING = "SPRING",
	/** Months June to August */
	SUMMER = "SUMMER",
	/** Months September to November */
	FALL = "FALL",
}

/** Source type the media was adapted from */
export enum MediaSource {
	/** An original production not based of another work */
	ORIGINAL = "ORIGINAL",
	/** Asian comic book */
	MANGA = "MANGA",
	/** Written work published in volumes */
	LIGHT_NOVEL = "LIGHT_NOVEL",
	/** Video game driven primary by text and narrative */
	VISUAL_NOVEL = "VISUAL_NOVEL",
	/** Video game */
	VIDEO_GAME = "VIDEO_GAME",
	/** Other */
	OTHER = "OTHER",
	/** Version 2 only. Written works not published in volumes */
	NOVEL = "NOVEL",
	/** Version 2 only. Self-published works */
	DOUJINSHI = "DOUJINSHI",
	/** Version 2 only. Japanese Anime */
	ANIME = "ANIME",
}

/** Character sort enums */
export enum CharacterSort {
	ID = "ID",
	ID_DESC = "ID_DESC",
	ROLE = "ROLE",
	ROLE_DESC = "ROLE_DESC",
	SEARCH_MATCH = "SEARCH_MATCH",
	FAVOURITES = "FAVOURITES",
	FAVOURITES_DESC = "FAVOURITES_DESC",
	/** Order manually decided by moderators */
	RELEVANCE = "RELEVANCE",
}

/** The role the character plays in the media */
export enum CharacterRole {
	/** A primary character role in the media */
	MAIN = "MAIN",
	/** A supporting character role in the media */
	SUPPORTING = "SUPPORTING",
	/** A background character in the media */
	BACKGROUND = "BACKGROUND",
}

/** Media sort enums */
export enum MediaSort {
	ID = "ID",
	ID_DESC = "ID_DESC",
	TITLE_ROMAJI = "TITLE_ROMAJI",
	TITLE_ROMAJI_DESC = "TITLE_ROMAJI_DESC",
	TITLE_ENGLISH = "TITLE_ENGLISH",
	TITLE_ENGLISH_DESC = "TITLE_ENGLISH_DESC",
	TITLE_NATIVE = "TITLE_NATIVE",
	TITLE_NATIVE_DESC = "TITLE_NATIVE_DESC",
	TYPE = "TYPE",
	TYPE_DESC = "TYPE_DESC",
	FORMAT = "FORMAT",
	FORMAT_DESC = "FORMAT_DESC",
	START_DATE = "START_DATE",
	START_DATE_DESC = "START_DATE_DESC",
	END_DATE = "END_DATE",
	END_DATE_DESC = "END_DATE_DESC",
	SCORE = "SCORE",
	SCORE_DESC = "SCORE_DESC",
	POPULARITY = "POPULARITY",
	POPULARITY_DESC = "POPULARITY_DESC",
	TRENDING = "TRENDING",
	TRENDING_DESC = "TRENDING_DESC",
	EPISODES = "EPISODES",
	EPISODES_DESC = "EPISODES_DESC",
	DURATION = "DURATION",
	DURATION_DESC = "DURATION_DESC",
	STATUS = "STATUS",
	STATUS_DESC = "STATUS_DESC",
	CHAPTERS = "CHAPTERS",
	CHAPTERS_DESC = "CHAPTERS_DESC",
	VOLUMES = "VOLUMES",
	VOLUMES_DESC = "VOLUMES_DESC",
	UPDATED_AT = "UPDATED_AT",
	UPDATED_AT_DESC = "UPDATED_AT_DESC",
	SEARCH_MATCH = "SEARCH_MATCH",
	FAVOURITES = "FAVOURITES",
	FAVOURITES_DESC = "FAVOURITES_DESC",
}

/** The primary language of the voice actor */
export enum StaffLanguage {
	/** Japanese */
	JAPANESE = "JAPANESE",
	/** English */
	ENGLISH = "ENGLISH",
	/** Korean */
	KOREAN = "KOREAN",
	/** Italian */
	ITALIAN = "ITALIAN",
	/** Spanish */
	SPANISH = "SPANISH",
	/** Portuguese */
	PORTUGUESE = "PORTUGUESE",
	/** French */
	FRENCH = "FRENCH",
	/** German */
	GERMAN = "GERMAN",
	/** Hebrew */
	HEBREW = "HEBREW",
	/** Hungarian */
	HUNGARIAN = "HUNGARIAN",
}

/** Staff sort enums */
export enum StaffSort {
	ID = "ID",
	ID_DESC = "ID_DESC",
	ROLE = "ROLE",
	ROLE_DESC = "ROLE_DESC",
	LANGUAGE = "LANGUAGE",
	LANGUAGE_DESC = "LANGUAGE_DESC",
	SEARCH_MATCH = "SEARCH_MATCH",
	FAVOURITES = "FAVOURITES",
	FAVOURITES_DESC = "FAVOURITES_DESC",
	/** Order manually decided by moderators */
	RELEVANCE = "RELEVANCE",
}

/** Studio sort enums */
export enum StudioSort {
	ID = "ID",
	ID_DESC = "ID_DESC",
	NAME = "NAME",
	NAME_DESC = "NAME_DESC",
	SEARCH_MATCH = "SEARCH_MATCH",
	FAVOURITES = "FAVOURITES",
	FAVOURITES_DESC = "FAVOURITES_DESC",
}

/** Media trend sort enums */
export enum MediaTrendSort {
	ID = "ID",
	ID_DESC = "ID_DESC",
	MEDIA_ID = "MEDIA_ID",
	MEDIA_ID_DESC = "MEDIA_ID_DESC",
	DATE = "DATE",
	DATE_DESC = "DATE_DESC",
	SCORE = "SCORE",
	SCORE_DESC = "SCORE_DESC",
	POPULARITY = "POPULARITY",
	POPULARITY_DESC = "POPULARITY_DESC",
	TRENDING = "TRENDING",
	TRENDING_DESC = "TRENDING_DESC",
	EPISODE = "EPISODE",
	EPISODE_DESC = "EPISODE_DESC",
}

/** The type of ranking */
export enum MediaRankType {
	/** Ranking is based on the media's ratings/score */
	RATED = "RATED",
	/** Ranking is based on the media's popularity */
	POPULAR = "POPULAR",
}

/** Media list watching/reading status enum. */
export enum MediaListStatus {
	/** Currently watching/reading */
	CURRENT = "CURRENT",
	/** Planning to watch/read */
	PLANNING = "PLANNING",
	/** Finished watching/reading */
	COMPLETED = "COMPLETED",
	/** Stopped watching/reading before completing */
	DROPPED = "DROPPED",
	/** Paused watching/reading */
	PAUSED = "PAUSED",
	/** Re-watching/reading */
	REPEATING = "REPEATING",
}

/** Review sort enums */
export enum ReviewSort {
	ID = "ID",
	ID_DESC = "ID_DESC",
	SCORE = "SCORE",
	SCORE_DESC = "SCORE_DESC",
	RATING = "RATING",
	RATING_DESC = "RATING_DESC",
	CREATED_AT = "CREATED_AT",
	CREATED_AT_DESC = "CREATED_AT_DESC",
	UPDATED_AT = "UPDATED_AT",
	UPDATED_AT_DESC = "UPDATED_AT_DESC",
}

/** Review rating enums */
export enum ReviewRating {
	NO_VOTE = "NO_VOTE",
	UP_VOTE = "UP_VOTE",
	DOWN_VOTE = "DOWN_VOTE",
}

/** Recommendation sort enums */
export enum RecommendationSort {
	ID = "ID",
	ID_DESC = "ID_DESC",
	RATING = "RATING",
	RATING_DESC = "RATING_DESC",
}

/** Recommendation rating enums */
export enum RecommendationRating {
	NO_RATING = "NO_RATING",
	RATE_UP = "RATE_UP",
	RATE_DOWN = "RATE_DOWN",
}

/** Type of relation media has to its parent. */
export enum MediaRelation {
	/** An adaption of this media into a different format */
	ADAPTATION = "ADAPTATION",
	/** Released before the relation */
	PREQUEL = "PREQUEL",
	/** Released after the relation */
	SEQUEL = "SEQUEL",
	/** The media a side story is from */
	PARENT = "PARENT",
	/** A side story of the parent media */
	SIDE_STORY = "SIDE_STORY",
	/** Shares at least 1 character */
	CHARACTER = "CHARACTER",
	/** A shortened and summarized version */
	SUMMARY = "SUMMARY",
	/** An alternative version of the same media */
	ALTERNATIVE = "ALTERNATIVE",
	/** An alternative version of the media with a different primary focus */
	SPIN_OFF = "SPIN_OFF",
	/** Other */
	OTHER = "OTHER",
	/** Version 2 only. The source material the media was adapted from */
	SOURCE = "SOURCE",
	/** Version 2 only. */
	COMPILATION = "COMPILATION",
	/** Version 2 only. */
	CONTAINS = "CONTAINS",
}

/** User statistics sort enum */
export enum UserStatisticsSort {
	ID = "ID",
	ID_DESC = "ID_DESC",
	COUNT = "COUNT",
	COUNT_DESC = "COUNT_DESC",
	PROGRESS = "PROGRESS",
	PROGRESS_DESC = "PROGRESS_DESC",
	MEAN_SCORE = "MEAN_SCORE",
	MEAN_SCORE_DESC = "MEAN_SCORE_DESC",
}

/** Media list sort enums */
export enum MediaListSort {
	MEDIA_ID = "MEDIA_ID",
	MEDIA_ID_DESC = "MEDIA_ID_DESC",
	SCORE = "SCORE",
	SCORE_DESC = "SCORE_DESC",
	STATUS = "STATUS",
	STATUS_DESC = "STATUS_DESC",
	PROGRESS = "PROGRESS",
	PROGRESS_DESC = "PROGRESS_DESC",
	PROGRESS_VOLUMES = "PROGRESS_VOLUMES",
	PROGRESS_VOLUMES_DESC = "PROGRESS_VOLUMES_DESC",
	REPEAT = "REPEAT",
	REPEAT_DESC = "REPEAT_DESC",
	PRIORITY = "PRIORITY",
	PRIORITY_DESC = "PRIORITY_DESC",
	STARTED_ON = "STARTED_ON",
	STARTED_ON_DESC = "STARTED_ON_DESC",
	FINISHED_ON = "FINISHED_ON",
	FINISHED_ON_DESC = "FINISHED_ON_DESC",
	ADDED_TIME = "ADDED_TIME",
	ADDED_TIME_DESC = "ADDED_TIME_DESC",
	UPDATED_TIME = "UPDATED_TIME",
	UPDATED_TIME_DESC = "UPDATED_TIME_DESC",
	MEDIA_TITLE_ROMAJI = "MEDIA_TITLE_ROMAJI",
	MEDIA_TITLE_ROMAJI_DESC = "MEDIA_TITLE_ROMAJI_DESC",
	MEDIA_TITLE_ENGLISH = "MEDIA_TITLE_ENGLISH",
	MEDIA_TITLE_ENGLISH_DESC = "MEDIA_TITLE_ENGLISH_DESC",
	MEDIA_TITLE_NATIVE = "MEDIA_TITLE_NATIVE",
	MEDIA_TITLE_NATIVE_DESC = "MEDIA_TITLE_NATIVE_DESC",
	MEDIA_POPULARITY = "MEDIA_POPULARITY",
	MEDIA_POPULARITY_DESC = "MEDIA_POPULARITY_DESC",
}

/** Airing schedule sort enums */
export enum AiringSort {
	ID = "ID",
	ID_DESC = "ID_DESC",
	MEDIA_ID = "MEDIA_ID",
	MEDIA_ID_DESC = "MEDIA_ID_DESC",
	TIME = "TIME",
	TIME_DESC = "TIME_DESC",
	EPISODE = "EPISODE",
	EPISODE_DESC = "EPISODE_DESC",
}

/** Activity type enum. */
export enum ActivityType {
	/** A text activity */
	TEXT = "TEXT",
	/** A anime list update activity */
	ANIME_LIST = "ANIME_LIST",
	/** A manga list update activity */
	MANGA_LIST = "MANGA_LIST",
	/** A text message activity sent to another user */
	MESSAGE = "MESSAGE",
	/** Anime & Manga list update, only used in query arguments */
	MEDIA_LIST = "MEDIA_LIST",
}

/** Activity sort enums */
export enum ActivitySort {
	ID = "ID",
	ID_DESC = "ID_DESC",
}

/** Thread sort enums */
export enum ThreadSort {
	ID = "ID",
	ID_DESC = "ID_DESC",
	TITLE = "TITLE",
	TITLE_DESC = "TITLE_DESC",
	CREATED_AT = "CREATED_AT",
	CREATED_AT_DESC = "CREATED_AT_DESC",
	UPDATED_AT = "UPDATED_AT",
	UPDATED_AT_DESC = "UPDATED_AT_DESC",
	REPLIED_AT = "REPLIED_AT",
	REPLIED_AT_DESC = "REPLIED_AT_DESC",
	REPLY_COUNT = "REPLY_COUNT",
	REPLY_COUNT_DESC = "REPLY_COUNT_DESC",
	VIEW_COUNT = "VIEW_COUNT",
	VIEW_COUNT_DESC = "VIEW_COUNT_DESC",
	IS_STICKY = "IS_STICKY",
	SEARCH_MATCH = "SEARCH_MATCH",
}

/** Thread comments sort enums */
export enum ThreadCommentSort {
	ID = "ID",
	ID_DESC = "ID_DESC",
}

/** Types that can be liked */
export enum LikeableType {
	THREAD = "THREAD",
	THREAD_COMMENT = "THREAD_COMMENT",
	ACTIVITY = "ACTIVITY",
	ACTIVITY_REPLY = "ACTIVITY_REPLY",
}

/** Site trend sort enums */
export enum SiteTrendSort {
	DATE = "DATE",
	DATE_DESC = "DATE_DESC",
	COUNT = "COUNT",
	COUNT_DESC = "COUNT_DESC",
	CHANGE = "CHANGE",
	CHANGE_DESC = "CHANGE_DESC",
}

/** Notification option input */
export interface NotificationOptionInput {
	/** The type of notification */
	type?: Maybe<NotificationType>
	/** Whether this type of notification is enabled */
	enabled?: Maybe<Scalars["Boolean"]>
}

/** A user's list options for anime or manga lists */
export interface MediaListOptionsInput {
	/** The order each list should be displayed in */
	sectionOrder?: Maybe<Array<Maybe<Scalars["String"]>>>
	/** If the completed sections of the list should be separated by format */
	splitCompletedSectionByFormat?: Maybe<Scalars["Boolean"]>
	/** The names of the user's custom lists */
	customLists?: Maybe<Array<Maybe<Scalars["String"]>>>
	/** The names of the user's advanced scoring sections */
	advancedScoring?: Maybe<Array<Maybe<Scalars["String"]>>>
	/** If advanced scoring is enabled */
	advancedScoringEnabled?: Maybe<Scalars["Boolean"]>
	/** list theme */
	theme?: Maybe<Scalars["String"]>
}

/** Date object that allows for incomplete date values (fuzzy) */
export interface FuzzyDateInput {
	/** Numeric Year (2017) */
	year?: Maybe<Scalars["Int"]>
	/** Numeric Month (3) */
	month?: Maybe<Scalars["Int"]>
	/** Numeric Day (24) */
	day?: Maybe<Scalars["Int"]>
}

export interface AniChartHighlightInput {
	mediaId?: Maybe<Scalars["Int"]>
	highlight?: Maybe<Scalars["String"]>
}

/** Submission status */
export enum SubmissionStatus {
	PENDING = "PENDING",
	REJECTED = "REJECTED",
	PARTIALLY_ACCEPTED = "PARTIALLY_ACCEPTED",
	ACCEPTED = "ACCEPTED",
}

/** Submission sort enums */
export enum SubmissionSort {
	ID = "ID",
	ID_DESC = "ID_DESC",
}

/** Revision history actions */
export enum RevisionHistoryAction {
	CREATE = "CREATE",
	EDIT = "EDIT",
}

export enum ModActionType {
	NOTE = "NOTE",
	BAN = "BAN",
	DELETE = "DELETE",
	EDIT = "EDIT",
	EXPIRE = "EXPIRE",
	REPORT = "REPORT",
	RESET = "RESET",
	ANON = "ANON",
}

/** The official titles of the media in various languages */
export interface MediaTitleInput {
	/** The romanization of the native language title */
	romaji?: Maybe<Scalars["String"]>
	/** The official english title */
	english?: Maybe<Scalars["String"]>
	/** Official title in it's native language */
	native?: Maybe<Scalars["String"]>
}

/** An external link to another site related to the media */
export interface MediaExternalLinkInput {
	/** The id of the external link */
	id: Scalars["Int"]
	/** The url of the external link */
	url: Scalars["String"]
	/** The site location of the external link */
	site: Scalars["String"]
}

export interface AiringScheduleInput {
	airingAt?: Maybe<Scalars["Int"]>
	episode?: Maybe<Scalars["Int"]>
	timeUntilAiring?: Maybe<Scalars["Int"]>
}

/** The names of the character */
export interface CharacterNameInput {
	/** The character's given name */
	first?: Maybe<Scalars["String"]>
	/** The character's middle name */
	middle?: Maybe<Scalars["String"]>
	/** The character's surname */
	last?: Maybe<Scalars["String"]>
	/** The character's full name in their native language */
	native?: Maybe<Scalars["String"]>
	/** Other names the character might be referred by */
	alternative?: Maybe<Array<Maybe<Scalars["String"]>>>
	/** Other names the character might be referred to as but are spoilers */
	alternativeSpoiler?: Maybe<Array<Maybe<Scalars["String"]>>>
}

/** The names of the staff member */
export interface StaffNameInput {
	/** The person's given name */
	first?: Maybe<Scalars["String"]>
	/** The person's middle name */
	middle?: Maybe<Scalars["String"]>
	/** The person's surname */
	last?: Maybe<Scalars["String"]>
	/** The person's full name in their native language */
	native?: Maybe<Scalars["String"]>
	/** Other names the character might be referred by */
	alternative?: Maybe<Array<Maybe<Scalars["String"]>>>
}

export const scalarsEnumsHash: ScalarsEnumsHash = {
	Int: true,
	Boolean: true,
	String: true,
	UserSort: true,
	Json: true,
	UserTitleLanguage: true,
	NotificationType: true,
	ScoreFormat: true,
	MediaType: true,
	MediaFormat: true,
	MediaStatus: true,
	MediaSeason: true,
	CountryCode: true,
	MediaSource: true,
	CharacterSort: true,
	CharacterRole: true,
	MediaSort: true,
	StaffLanguage: true,
	StaffSort: true,
	StudioSort: true,
	MediaTrendSort: true,
	MediaRankType: true,
	MediaListStatus: true,
	Float: true,
	ReviewSort: true,
	ReviewRating: true,
	RecommendationSort: true,
	RecommendationRating: true,
	MediaRelation: true,
	UserStatisticsSort: true,
	FuzzyDateInt: true,
	MediaListSort: true,
	AiringSort: true,
	ActivityType: true,
	ActivitySort: true,
	ThreadSort: true,
	ThreadCommentSort: true,
	LikeableType: true,
	SiteTrendSort: true,
	SubmissionStatus: true,
	SubmissionSort: true,
	RevisionHistoryAction: true,
	ModActionType: true,
	ID: true,
}
export const generatedSchema = {
	query: {
		__typename: { __type: "String!" },
		Page: { __type: "Page", __args: { page: "Int", perPage: "Int" } },
		Media: {
			__type: "Media",
			__args: {
				id: "Int",
				idMal: "Int",
				startDate: "FuzzyDateInt",
				endDate: "FuzzyDateInt",
				season: "MediaSeason",
				seasonYear: "Int",
				type: "MediaType",
				format: "MediaFormat",
				status: "MediaStatus",
				episodes: "Int",
				duration: "Int",
				chapters: "Int",
				volumes: "Int",
				isAdult: "Boolean",
				genre: "String",
				tag: "String",
				minimumTagRank: "Int",
				tagCategory: "String",
				onList: "Boolean",
				licensedBy: "String",
				averageScore: "Int",
				popularity: "Int",
				source: "MediaSource",
				countryOfOrigin: "CountryCode",
				search: "String",
				id_not: "Int",
				id_in: "[Int]",
				id_not_in: "[Int]",
				idMal_not: "Int",
				idMal_in: "[Int]",
				idMal_not_in: "[Int]",
				startDate_greater: "FuzzyDateInt",
				startDate_lesser: "FuzzyDateInt",
				startDate_like: "String",
				endDate_greater: "FuzzyDateInt",
				endDate_lesser: "FuzzyDateInt",
				endDate_like: "String",
				format_in: "[MediaFormat]",
				format_not: "MediaFormat",
				format_not_in: "[MediaFormat]",
				status_in: "[MediaStatus]",
				status_not: "MediaStatus",
				status_not_in: "[MediaStatus]",
				episodes_greater: "Int",
				episodes_lesser: "Int",
				duration_greater: "Int",
				duration_lesser: "Int",
				chapters_greater: "Int",
				chapters_lesser: "Int",
				volumes_greater: "Int",
				volumes_lesser: "Int",
				genre_in: "[String]",
				genre_not_in: "[String]",
				tag_in: "[String]",
				tag_not_in: "[String]",
				tagCategory_in: "[String]",
				tagCategory_not_in: "[String]",
				licensedBy_in: "[String]",
				averageScore_not: "Int",
				averageScore_greater: "Int",
				averageScore_lesser: "Int",
				popularity_not: "Int",
				popularity_greater: "Int",
				popularity_lesser: "Int",
				source_in: "[MediaSource]",
				sort: "[MediaSort]",
			},
		},
		MediaTrend: {
			__type: "MediaTrend",
			__args: {
				mediaId: "Int",
				date: "Int",
				trending: "Int",
				averageScore: "Int",
				popularity: "Int",
				episode: "Int",
				releasing: "Boolean",
				mediaId_not: "Int",
				mediaId_in: "[Int]",
				mediaId_not_in: "[Int]",
				date_greater: "Int",
				date_lesser: "Int",
				trending_greater: "Int",
				trending_lesser: "Int",
				trending_not: "Int",
				averageScore_greater: "Int",
				averageScore_lesser: "Int",
				averageScore_not: "Int",
				popularity_greater: "Int",
				popularity_lesser: "Int",
				popularity_not: "Int",
				episode_greater: "Int",
				episode_lesser: "Int",
				episode_not: "Int",
				sort: "[MediaTrendSort]",
			},
		},
		AiringSchedule: {
			__type: "AiringSchedule",
			__args: {
				id: "Int",
				mediaId: "Int",
				episode: "Int",
				airingAt: "Int",
				notYetAired: "Boolean",
				id_not: "Int",
				id_in: "[Int]",
				id_not_in: "[Int]",
				mediaId_not: "Int",
				mediaId_in: "[Int]",
				mediaId_not_in: "[Int]",
				episode_not: "Int",
				episode_in: "[Int]",
				episode_not_in: "[Int]",
				episode_greater: "Int",
				episode_lesser: "Int",
				airingAt_greater: "Int",
				airingAt_lesser: "Int",
				sort: "[AiringSort]",
			},
		},
		Character: {
			__type: "Character",
			__args: {
				id: "Int",
				isBirthday: "Boolean",
				search: "String",
				id_not: "Int",
				id_in: "[Int]",
				id_not_in: "[Int]",
				sort: "[CharacterSort]",
			},
		},
		Staff: {
			__type: "Staff",
			__args: {
				id: "Int",
				isBirthday: "Boolean",
				search: "String",
				id_not: "Int",
				id_in: "[Int]",
				id_not_in: "[Int]",
				sort: "[StaffSort]",
			},
		},
		MediaList: {
			__type: "MediaList",
			__args: {
				id: "Int",
				userId: "Int",
				userName: "String",
				type: "MediaType",
				status: "MediaListStatus",
				mediaId: "Int",
				isFollowing: "Boolean",
				notes: "String",
				startedAt: "FuzzyDateInt",
				completedAt: "FuzzyDateInt",
				compareWithAuthList: "Boolean",
				userId_in: "[Int]",
				status_in: "[MediaListStatus]",
				status_not_in: "[MediaListStatus]",
				status_not: "MediaListStatus",
				mediaId_in: "[Int]",
				mediaId_not_in: "[Int]",
				notes_like: "String",
				startedAt_greater: "FuzzyDateInt",
				startedAt_lesser: "FuzzyDateInt",
				startedAt_like: "String",
				completedAt_greater: "FuzzyDateInt",
				completedAt_lesser: "FuzzyDateInt",
				completedAt_like: "String",
				sort: "[MediaListSort]",
			},
		},
		MediaListCollection: {
			__type: "MediaListCollection",
			__args: {
				userId: "Int",
				userName: "String",
				type: "MediaType",
				status: "MediaListStatus",
				notes: "String",
				startedAt: "FuzzyDateInt",
				completedAt: "FuzzyDateInt",
				forceSingleCompletedList: "Boolean",
				chunk: "Int",
				perChunk: "Int",
				status_in: "[MediaListStatus]",
				status_not_in: "[MediaListStatus]",
				status_not: "MediaListStatus",
				notes_like: "String",
				startedAt_greater: "FuzzyDateInt",
				startedAt_lesser: "FuzzyDateInt",
				startedAt_like: "String",
				completedAt_greater: "FuzzyDateInt",
				completedAt_lesser: "FuzzyDateInt",
				completedAt_like: "String",
				sort: "[MediaListSort]",
			},
		},
		GenreCollection: { __type: "[String]" },
		MediaTagCollection: { __type: "[MediaTag]", __args: { status: "Int" } },
		User: {
			__type: "User",
			__args: {
				id: "Int",
				name: "String",
				search: "String",
				sort: "[UserSort]",
			},
		},
		Viewer: { __type: "User" },
		Notification: {
			__type: "NotificationUnion",
			__args: {
				type: "NotificationType",
				resetNotificationCount: "Boolean",
				type_in: "[NotificationType]",
			},
		},
		Studio: {
			__type: "Studio",
			__args: {
				id: "Int",
				search: "String",
				id_not: "Int",
				id_in: "[Int]",
				id_not_in: "[Int]",
				sort: "[StudioSort]",
			},
		},
		Review: {
			__type: "Review",
			__args: {
				id: "Int",
				mediaId: "Int",
				userId: "Int",
				mediaType: "MediaType",
				sort: "[ReviewSort]",
			},
		},
		Activity: {
			__type: "ActivityUnion",
			__args: {
				id: "Int",
				userId: "Int",
				messengerId: "Int",
				mediaId: "Int",
				type: "ActivityType",
				isFollowing: "Boolean",
				hasReplies: "Boolean",
				hasRepliesOrTypeText: "Boolean",
				createdAt: "Int",
				id_not: "Int",
				id_in: "[Int]",
				id_not_in: "[Int]",
				userId_not: "Int",
				userId_in: "[Int]",
				userId_not_in: "[Int]",
				messengerId_not: "Int",
				messengerId_in: "[Int]",
				messengerId_not_in: "[Int]",
				mediaId_not: "Int",
				mediaId_in: "[Int]",
				mediaId_not_in: "[Int]",
				type_not: "ActivityType",
				type_in: "[ActivityType]",
				type_not_in: "[ActivityType]",
				createdAt_greater: "Int",
				createdAt_lesser: "Int",
				sort: "[ActivitySort]",
			},
		},
		ActivityReply: {
			__type: "ActivityReply",
			__args: { id: "Int", activityId: "Int" },
		},
		Following: {
			__type: "User",
			__args: { userId: "Int!", sort: "[UserSort]" },
		},
		Follower: {
			__type: "User",
			__args: { userId: "Int!", sort: "[UserSort]" },
		},
		Thread: {
			__type: "Thread",
			__args: {
				id: "Int",
				userId: "Int",
				replyUserId: "Int",
				subscribed: "Boolean",
				categoryId: "Int",
				mediaCategoryId: "Int",
				search: "String",
				id_in: "[Int]",
				sort: "[ThreadSort]",
			},
		},
		ThreadComment: {
			__type: "[ThreadComment]",
			__args: {
				id: "Int",
				threadId: "Int",
				userId: "Int",
				sort: "[ThreadCommentSort]",
			},
		},
		Recommendation: {
			__type: "Recommendation",
			__args: {
				id: "Int",
				mediaId: "Int",
				mediaRecommendationId: "Int",
				userId: "Int",
				rating: "Int",
				onList: "Boolean",
				rating_greater: "Int",
				rating_lesser: "Int",
				sort: "[RecommendationSort]",
			},
		},
		Like: {
			__type: "User",
			__args: { likeableId: "Int", type: "LikeableType" },
		},
		Markdown: { __type: "ParsedMarkdown", __args: { markdown: "String!" } },
		AniChartUser: { __type: "AniChartUser" },
		SiteStatistics: { __type: "SiteStatistics" },
	},
	mutation: {
		__typename: { __type: "String!" },
		UpdateUser: {
			__type: "User",
			__args: {
				about: "String",
				titleLanguage: "UserTitleLanguage",
				displayAdultContent: "Boolean",
				airingNotifications: "Boolean",
				scoreFormat: "ScoreFormat",
				rowOrder: "String",
				profileColor: "String",
				donatorBadge: "String",
				notificationOptions: "[NotificationOptionInput]",
				timezone: "String",
				activityMergeTime: "Int",
				animeListOptions: "MediaListOptionsInput",
				mangaListOptions: "MediaListOptionsInput",
			},
		},
		SaveMediaListEntry: {
			__type: "MediaList",
			__args: {
				id: "Int",
				mediaId: "Int",
				status: "MediaListStatus",
				score: "Float",
				scoreRaw: "Int",
				progress: "Int",
				progressVolumes: "Int",
				repeat: "Int",
				priority: "Int",
				private: "Boolean",
				notes: "String",
				hiddenFromStatusLists: "Boolean",
				customLists: "[String]",
				advancedScores: "[Float]",
				startedAt: "FuzzyDateInput",
				completedAt: "FuzzyDateInput",
			},
		},
		UpdateMediaListEntries: {
			__type: "[MediaList]",
			__args: {
				status: "MediaListStatus",
				score: "Float",
				scoreRaw: "Int",
				progress: "Int",
				progressVolumes: "Int",
				repeat: "Int",
				priority: "Int",
				private: "Boolean",
				notes: "String",
				hiddenFromStatusLists: "Boolean",
				advancedScores: "[Float]",
				startedAt: "FuzzyDateInput",
				completedAt: "FuzzyDateInput",
				ids: "[Int]",
			},
		},
		DeleteMediaListEntry: { __type: "Deleted", __args: { id: "Int" } },
		DeleteCustomList: {
			__type: "Deleted",
			__args: { customList: "String", type: "MediaType" },
		},
		SaveTextActivity: {
			__type: "TextActivity",
			__args: { id: "Int", text: "String", locked: "Boolean" },
		},
		SaveMessageActivity: {
			__type: "MessageActivity",
			__args: {
				id: "Int",
				message: "String",
				recipientId: "Int",
				private: "Boolean",
				locked: "Boolean",
				asMod: "Boolean",
			},
		},
		SaveListActivity: {
			__type: "ListActivity",
			__args: { id: "Int", locked: "Boolean" },
		},
		DeleteActivity: { __type: "Deleted", __args: { id: "Int" } },
		ToggleActivitySubscription: {
			__type: "ActivityUnion",
			__args: { activityId: "Int", subscribe: "Boolean" },
		},
		SaveActivityReply: {
			__type: "ActivityReply",
			__args: {
				id: "Int",
				activityId: "Int",
				text: "String",
				asMod: "Boolean",
			},
		},
		DeleteActivityReply: { __type: "Deleted", __args: { id: "Int" } },
		ToggleLike: {
			__type: "[User]",
			__args: { id: "Int", type: "LikeableType" },
		},
		ToggleLikeV2: {
			__type: "LikeableUnion",
			__args: { id: "Int", type: "LikeableType" },
		},
		ToggleFollow: { __type: "User", __args: { userId: "Int" } },
		ToggleFavourite: {
			__type: "Favourites",
			__args: {
				animeId: "Int",
				mangaId: "Int",
				characterId: "Int",
				staffId: "Int",
				studioId: "Int",
			},
		},
		UpdateFavouriteOrder: {
			__type: "Favourites",
			__args: {
				animeIds: "[Int]",
				mangaIds: "[Int]",
				characterIds: "[Int]",
				staffIds: "[Int]",
				studioIds: "[Int]",
				animeOrder: "[Int]",
				mangaOrder: "[Int]",
				characterOrder: "[Int]",
				staffOrder: "[Int]",
				studioOrder: "[Int]",
			},
		},
		SaveReview: {
			__type: "Review",
			__args: {
				id: "Int",
				mediaId: "Int",
				body: "String",
				summary: "String",
				score: "Int",
				private: "Boolean",
			},
		},
		DeleteReview: { __type: "Deleted", __args: { id: "Int" } },
		RateReview: {
			__type: "Review",
			__args: { reviewId: "Int", rating: "ReviewRating" },
		},
		SaveRecommendation: {
			__type: "Recommendation",
			__args: {
				mediaId: "Int",
				mediaRecommendationId: "Int",
				rating: "RecommendationRating",
			},
		},
		SaveThread: {
			__type: "Thread",
			__args: {
				id: "Int",
				title: "String",
				body: "String",
				categories: "[Int]",
				mediaCategories: "[Int]",
				sticky: "Boolean",
				locked: "Boolean",
			},
		},
		DeleteThread: { __type: "Deleted", __args: { id: "Int" } },
		ToggleThreadSubscription: {
			__type: "Thread",
			__args: { threadId: "Int", subscribe: "Boolean" },
		},
		SaveThreadComment: {
			__type: "ThreadComment",
			__args: {
				id: "Int",
				threadId: "Int",
				parentCommentId: "Int",
				comment: "String",
			},
		},
		DeleteThreadComment: { __type: "Deleted", __args: { id: "Int" } },
		UpdateAniChartSettings: {
			__type: "Json",
			__args: {
				titleLanguage: "String",
				outgoingLinkProvider: "String",
				theme: "String",
				sort: "String",
			},
		},
		UpdateAniChartHighlights: {
			__type: "Json",
			__args: { highlights: "[AniChartHighlightInput]" },
		},
	},
	subscription: {},
	Page: {
		__typename: { __type: "String!" },
		pageInfo: { __type: "PageInfo" },
		users: {
			__type: "[User]",
			__args: {
				id: "Int",
				name: "String",
				search: "String",
				sort: "[UserSort]",
			},
		},
		media: {
			__type: "[Media]",
			__args: {
				id: "Int",
				idMal: "Int",
				startDate: "FuzzyDateInt",
				endDate: "FuzzyDateInt",
				season: "MediaSeason",
				seasonYear: "Int",
				type: "MediaType",
				format: "MediaFormat",
				status: "MediaStatus",
				episodes: "Int",
				duration: "Int",
				chapters: "Int",
				volumes: "Int",
				isAdult: "Boolean",
				genre: "String",
				tag: "String",
				minimumTagRank: "Int",
				tagCategory: "String",
				onList: "Boolean",
				licensedBy: "String",
				averageScore: "Int",
				popularity: "Int",
				source: "MediaSource",
				countryOfOrigin: "CountryCode",
				search: "String",
				id_not: "Int",
				id_in: "[Int]",
				id_not_in: "[Int]",
				idMal_not: "Int",
				idMal_in: "[Int]",
				idMal_not_in: "[Int]",
				startDate_greater: "FuzzyDateInt",
				startDate_lesser: "FuzzyDateInt",
				startDate_like: "String",
				endDate_greater: "FuzzyDateInt",
				endDate_lesser: "FuzzyDateInt",
				endDate_like: "String",
				format_in: "[MediaFormat]",
				format_not: "MediaFormat",
				format_not_in: "[MediaFormat]",
				status_in: "[MediaStatus]",
				status_not: "MediaStatus",
				status_not_in: "[MediaStatus]",
				episodes_greater: "Int",
				episodes_lesser: "Int",
				duration_greater: "Int",
				duration_lesser: "Int",
				chapters_greater: "Int",
				chapters_lesser: "Int",
				volumes_greater: "Int",
				volumes_lesser: "Int",
				genre_in: "[String]",
				genre_not_in: "[String]",
				tag_in: "[String]",
				tag_not_in: "[String]",
				tagCategory_in: "[String]",
				tagCategory_not_in: "[String]",
				licensedBy_in: "[String]",
				averageScore_not: "Int",
				averageScore_greater: "Int",
				averageScore_lesser: "Int",
				popularity_not: "Int",
				popularity_greater: "Int",
				popularity_lesser: "Int",
				source_in: "[MediaSource]",
				sort: "[MediaSort]",
			},
		},
		characters: {
			__type: "[Character]",
			__args: {
				id: "Int",
				isBirthday: "Boolean",
				search: "String",
				id_not: "Int",
				id_in: "[Int]",
				id_not_in: "[Int]",
				sort: "[CharacterSort]",
			},
		},
		staff: {
			__type: "[Staff]",
			__args: {
				id: "Int",
				isBirthday: "Boolean",
				search: "String",
				id_not: "Int",
				id_in: "[Int]",
				id_not_in: "[Int]",
				sort: "[StaffSort]",
			},
		},
		studios: {
			__type: "[Studio]",
			__args: {
				id: "Int",
				search: "String",
				id_not: "Int",
				id_in: "[Int]",
				id_not_in: "[Int]",
				sort: "[StudioSort]",
			},
		},
		mediaList: {
			__type: "[MediaList]",
			__args: {
				id: "Int",
				userId: "Int",
				userName: "String",
				type: "MediaType",
				status: "MediaListStatus",
				mediaId: "Int",
				isFollowing: "Boolean",
				notes: "String",
				startedAt: "FuzzyDateInt",
				completedAt: "FuzzyDateInt",
				compareWithAuthList: "Boolean",
				userId_in: "[Int]",
				status_in: "[MediaListStatus]",
				status_not_in: "[MediaListStatus]",
				status_not: "MediaListStatus",
				mediaId_in: "[Int]",
				mediaId_not_in: "[Int]",
				notes_like: "String",
				startedAt_greater: "FuzzyDateInt",
				startedAt_lesser: "FuzzyDateInt",
				startedAt_like: "String",
				completedAt_greater: "FuzzyDateInt",
				completedAt_lesser: "FuzzyDateInt",
				completedAt_like: "String",
				sort: "[MediaListSort]",
			},
		},
		airingSchedules: {
			__type: "[AiringSchedule]",
			__args: {
				id: "Int",
				mediaId: "Int",
				episode: "Int",
				airingAt: "Int",
				notYetAired: "Boolean",
				id_not: "Int",
				id_in: "[Int]",
				id_not_in: "[Int]",
				mediaId_not: "Int",
				mediaId_in: "[Int]",
				mediaId_not_in: "[Int]",
				episode_not: "Int",
				episode_in: "[Int]",
				episode_not_in: "[Int]",
				episode_greater: "Int",
				episode_lesser: "Int",
				airingAt_greater: "Int",
				airingAt_lesser: "Int",
				sort: "[AiringSort]",
			},
		},
		mediaTrends: {
			__type: "[MediaTrend]",
			__args: {
				mediaId: "Int",
				date: "Int",
				trending: "Int",
				averageScore: "Int",
				popularity: "Int",
				episode: "Int",
				releasing: "Boolean",
				mediaId_not: "Int",
				mediaId_in: "[Int]",
				mediaId_not_in: "[Int]",
				date_greater: "Int",
				date_lesser: "Int",
				trending_greater: "Int",
				trending_lesser: "Int",
				trending_not: "Int",
				averageScore_greater: "Int",
				averageScore_lesser: "Int",
				averageScore_not: "Int",
				popularity_greater: "Int",
				popularity_lesser: "Int",
				popularity_not: "Int",
				episode_greater: "Int",
				episode_lesser: "Int",
				episode_not: "Int",
				sort: "[MediaTrendSort]",
			},
		},
		notifications: {
			__type: "[NotificationUnion]",
			__args: {
				type: "NotificationType",
				resetNotificationCount: "Boolean",
				type_in: "[NotificationType]",
			},
		},
		followers: {
			__type: "[User]",
			__args: { userId: "Int!", sort: "[UserSort]" },
		},
		following: {
			__type: "[User]",
			__args: { userId: "Int!", sort: "[UserSort]" },
		},
		activities: {
			__type: "[ActivityUnion]",
			__args: {
				id: "Int",
				userId: "Int",
				messengerId: "Int",
				mediaId: "Int",
				type: "ActivityType",
				isFollowing: "Boolean",
				hasReplies: "Boolean",
				hasRepliesOrTypeText: "Boolean",
				createdAt: "Int",
				id_not: "Int",
				id_in: "[Int]",
				id_not_in: "[Int]",
				userId_not: "Int",
				userId_in: "[Int]",
				userId_not_in: "[Int]",
				messengerId_not: "Int",
				messengerId_in: "[Int]",
				messengerId_not_in: "[Int]",
				mediaId_not: "Int",
				mediaId_in: "[Int]",
				mediaId_not_in: "[Int]",
				type_not: "ActivityType",
				type_in: "[ActivityType]",
				type_not_in: "[ActivityType]",
				createdAt_greater: "Int",
				createdAt_lesser: "Int",
				sort: "[ActivitySort]",
			},
		},
		activityReplies: {
			__type: "[ActivityReply]",
			__args: { id: "Int", activityId: "Int" },
		},
		threads: {
			__type: "[Thread]",
			__args: {
				id: "Int",
				userId: "Int",
				replyUserId: "Int",
				subscribed: "Boolean",
				categoryId: "Int",
				mediaCategoryId: "Int",
				search: "String",
				id_in: "[Int]",
				sort: "[ThreadSort]",
			},
		},
		threadComments: {
			__type: "[ThreadComment]",
			__args: {
				id: "Int",
				threadId: "Int",
				userId: "Int",
				sort: "[ThreadCommentSort]",
			},
		},
		reviews: {
			__type: "[Review]",
			__args: {
				id: "Int",
				mediaId: "Int",
				userId: "Int",
				mediaType: "MediaType",
				sort: "[ReviewSort]",
			},
		},
		recommendations: {
			__type: "[Recommendation]",
			__args: {
				id: "Int",
				mediaId: "Int",
				mediaRecommendationId: "Int",
				userId: "Int",
				rating: "Int",
				onList: "Boolean",
				rating_greater: "Int",
				rating_lesser: "Int",
				sort: "[RecommendationSort]",
			},
		},
		likes: {
			__type: "[User]",
			__args: { likeableId: "Int", type: "LikeableType" },
		},
	},
	PageInfo: {
		__typename: { __type: "String!" },
		total: { __type: "Int" },
		perPage: { __type: "Int" },
		currentPage: { __type: "Int" },
		lastPage: { __type: "Int" },
		hasNextPage: { __type: "Boolean" },
	},
	User: {
		__typename: { __type: "String!" },
		id: { __type: "Int!" },
		name: { __type: "String!" },
		about: { __type: "String", __args: { asHtml: "Boolean" } },
		avatar: { __type: "UserAvatar" },
		bannerImage: { __type: "String" },
		isFollowing: { __type: "Boolean" },
		isFollower: { __type: "Boolean" },
		isBlocked: { __type: "Boolean" },
		bans: { __type: "Json" },
		options: { __type: "UserOptions" },
		mediaListOptions: { __type: "MediaListOptions" },
		favourites: { __type: "Favourites", __args: { page: "Int" } },
		statistics: { __type: "UserStatisticTypes" },
		unreadNotificationCount: { __type: "Int" },
		siteUrl: { __type: "String" },
		donatorTier: { __type: "Int" },
		donatorBadge: { __type: "String" },
		moderatorStatus: { __type: "String" },
		updatedAt: { __type: "Int" },
		stats: { __type: "UserStats" },
	},
	UserAvatar: {
		__typename: { __type: "String!" },
		large: { __type: "String" },
		medium: { __type: "String" },
	},
	UserOptions: {
		__typename: { __type: "String!" },
		titleLanguage: { __type: "UserTitleLanguage" },
		displayAdultContent: { __type: "Boolean" },
		airingNotifications: { __type: "Boolean" },
		profileColor: { __type: "String" },
		notificationOptions: { __type: "[NotificationOption]" },
		timezone: { __type: "String" },
		activityMergeTime: { __type: "Int" },
	},
	NotificationOption: {
		__typename: { __type: "String!" },
		type: { __type: "NotificationType" },
		enabled: { __type: "Boolean" },
	},
	MediaListOptions: {
		__typename: { __type: "String!" },
		scoreFormat: { __type: "ScoreFormat" },
		rowOrder: { __type: "String" },
		useLegacyLists: { __type: "Boolean" },
		animeList: { __type: "MediaListTypeOptions" },
		mangaList: { __type: "MediaListTypeOptions" },
		sharedTheme: { __type: "Json" },
		sharedThemeEnabled: { __type: "Boolean" },
	},
	MediaListTypeOptions: {
		__typename: { __type: "String!" },
		sectionOrder: { __type: "[String]" },
		splitCompletedSectionByFormat: { __type: "Boolean" },
		theme: { __type: "Json" },
		customLists: { __type: "[String]" },
		advancedScoring: { __type: "[String]" },
		advancedScoringEnabled: { __type: "Boolean" },
	},
	Favourites: {
		__typename: { __type: "String!" },
		anime: {
			__type: "MediaConnection",
			__args: { page: "Int", perPage: "Int" },
		},
		manga: {
			__type: "MediaConnection",
			__args: { page: "Int", perPage: "Int" },
		},
		characters: {
			__type: "CharacterConnection",
			__args: { page: "Int", perPage: "Int" },
		},
		staff: {
			__type: "StaffConnection",
			__args: { page: "Int", perPage: "Int" },
		},
		studios: {
			__type: "StudioConnection",
			__args: { page: "Int", perPage: "Int" },
		},
	},
	MediaConnection: {
		__typename: { __type: "String!" },
		edges: { __type: "[MediaEdge]" },
		nodes: { __type: "[Media]" },
		pageInfo: { __type: "PageInfo" },
	},
	MediaEdge: {
		__typename: { __type: "String!" },
		node: { __type: "Media" },
		id: { __type: "Int" },
		relationType: { __type: "MediaRelation", __args: { version: "Int" } },
		isMainStudio: { __type: "Boolean!" },
		characters: { __type: "[Character]" },
		characterRole: { __type: "CharacterRole" },
		characterName: { __type: "String" },
		roleNotes: { __type: "String" },
		dubGroup: { __type: "String" },
		staffRole: { __type: "String" },
		voiceActors: {
			__type: "[Staff]",
			__args: { language: "StaffLanguage", sort: "[StaffSort]" },
		},
		voiceActorRoles: {
			__type: "[StaffRoleType]",
			__args: { language: "StaffLanguage", sort: "[StaffSort]" },
		},
		favouriteOrder: { __type: "Int" },
	},
	Media: {
		__typename: { __type: "String!" },
		id: { __type: "Int!" },
		idMal: { __type: "Int" },
		title: { __type: "MediaTitle" },
		type: { __type: "MediaType" },
		format: { __type: "MediaFormat" },
		status: { __type: "MediaStatus", __args: { version: "Int" } },
		description: { __type: "String", __args: { asHtml: "Boolean" } },
		startDate: { __type: "FuzzyDate" },
		endDate: { __type: "FuzzyDate" },
		season: { __type: "MediaSeason" },
		seasonYear: { __type: "Int" },
		seasonInt: { __type: "Int" },
		episodes: { __type: "Int" },
		duration: { __type: "Int" },
		chapters: { __type: "Int" },
		volumes: { __type: "Int" },
		countryOfOrigin: { __type: "CountryCode" },
		isLicensed: { __type: "Boolean" },
		source: { __type: "MediaSource", __args: { version: "Int" } },
		hashtag: { __type: "String" },
		trailer: { __type: "MediaTrailer" },
		updatedAt: { __type: "Int" },
		coverImage: { __type: "MediaCoverImage" },
		bannerImage: { __type: "String" },
		genres: { __type: "[String]" },
		synonyms: { __type: "[String]" },
		averageScore: { __type: "Int" },
		meanScore: { __type: "Int" },
		popularity: { __type: "Int" },
		isLocked: { __type: "Boolean" },
		trending: { __type: "Int" },
		favourites: { __type: "Int" },
		tags: { __type: "[MediaTag]" },
		relations: { __type: "MediaConnection" },
		characters: {
			__type: "CharacterConnection",
			__args: {
				sort: "[CharacterSort]",
				role: "CharacterRole",
				page: "Int",
				perPage: "Int",
			},
		},
		staff: {
			__type: "StaffConnection",
			__args: { sort: "[StaffSort]", page: "Int", perPage: "Int" },
		},
		studios: {
			__type: "StudioConnection",
			__args: { sort: "[StudioSort]", isMain: "Boolean" },
		},
		isFavourite: { __type: "Boolean!" },
		isAdult: { __type: "Boolean" },
		nextAiringEpisode: { __type: "AiringSchedule" },
		airingSchedule: {
			__type: "AiringScheduleConnection",
			__args: { notYetAired: "Boolean", page: "Int", perPage: "Int" },
		},
		trends: {
			__type: "MediaTrendConnection",
			__args: {
				sort: "[MediaTrendSort]",
				releasing: "Boolean",
				page: "Int",
				perPage: "Int",
			},
		},
		externalLinks: { __type: "[MediaExternalLink]" },
		streamingEpisodes: { __type: "[MediaStreamingEpisode]" },
		rankings: { __type: "[MediaRank]" },
		mediaListEntry: { __type: "MediaList" },
		reviews: {
			__type: "ReviewConnection",
			__args: {
				limit: "Int",
				sort: "[ReviewSort]",
				page: "Int",
				perPage: "Int",
			},
		},
		recommendations: {
			__type: "RecommendationConnection",
			__args: { sort: "[RecommendationSort]", page: "Int", perPage: "Int" },
		},
		stats: { __type: "MediaStats" },
		siteUrl: { __type: "String" },
		autoCreateForumThread: { __type: "Boolean" },
		isRecommendationBlocked: { __type: "Boolean" },
		modNotes: { __type: "String" },
	},
	MediaTitle: {
		__typename: { __type: "String!" },
		romaji: { __type: "String", __args: { stylised: "Boolean" } },
		english: { __type: "String", __args: { stylised: "Boolean" } },
		native: { __type: "String", __args: { stylised: "Boolean" } },
		userPreferred: { __type: "String" },
	},
	FuzzyDate: {
		__typename: { __type: "String!" },
		year: { __type: "Int" },
		month: { __type: "Int" },
		day: { __type: "Int" },
	},
	MediaTrailer: {
		__typename: { __type: "String!" },
		id: { __type: "String" },
		site: { __type: "String" },
		thumbnail: { __type: "String" },
	},
	MediaCoverImage: {
		__typename: { __type: "String!" },
		extraLarge: { __type: "String" },
		large: { __type: "String" },
		medium: { __type: "String" },
		color: { __type: "String" },
	},
	MediaTag: {
		__typename: { __type: "String!" },
		id: { __type: "Int!" },
		name: { __type: "String!" },
		description: { __type: "String" },
		category: { __type: "String" },
		rank: { __type: "Int" },
		isGeneralSpoiler: { __type: "Boolean" },
		isMediaSpoiler: { __type: "Boolean" },
		isAdult: { __type: "Boolean" },
	},
	CharacterConnection: {
		__typename: { __type: "String!" },
		edges: { __type: "[CharacterEdge]" },
		nodes: { __type: "[Character]" },
		pageInfo: { __type: "PageInfo" },
	},
	CharacterEdge: {
		__typename: { __type: "String!" },
		node: { __type: "Character" },
		id: { __type: "Int" },
		role: { __type: "CharacterRole" },
		name: { __type: "String" },
		voiceActors: {
			__type: "[Staff]",
			__args: { language: "StaffLanguage", sort: "[StaffSort]" },
		},
		voiceActorRoles: {
			__type: "[StaffRoleType]",
			__args: { language: "StaffLanguage", sort: "[StaffSort]" },
		},
		media: { __type: "[Media]" },
		favouriteOrder: { __type: "Int" },
	},
	Character: {
		__typename: { __type: "String!" },
		id: { __type: "Int!" },
		name: { __type: "CharacterName" },
		image: { __type: "CharacterImage" },
		description: { __type: "String", __args: { asHtml: "Boolean" } },
		gender: { __type: "String" },
		dateOfBirth: { __type: "FuzzyDate" },
		age: { __type: "String" },
		isFavourite: { __type: "Boolean!" },
		isFavouriteBlocked: { __type: "Boolean!" },
		siteUrl: { __type: "String" },
		media: {
			__type: "MediaConnection",
			__args: {
				sort: "[MediaSort]",
				type: "MediaType",
				onList: "Boolean",
				page: "Int",
				perPage: "Int",
			},
		},
		updatedAt: { __type: "Int" },
		favourites: { __type: "Int" },
		modNotes: { __type: "String" },
	},
	CharacterName: {
		__typename: { __type: "String!" },
		first: { __type: "String" },
		middle: { __type: "String" },
		last: { __type: "String" },
		full: { __type: "String" },
		native: { __type: "String" },
		alternative: { __type: "[String]" },
		alternativeSpoiler: { __type: "[String]" },
	},
	CharacterImage: {
		__typename: { __type: "String!" },
		large: { __type: "String" },
		medium: { __type: "String" },
	},
	Staff: {
		__typename: { __type: "String!" },
		id: { __type: "Int!" },
		name: { __type: "StaffName" },
		language: { __type: "StaffLanguage" },
		languageV2: { __type: "String" },
		image: { __type: "StaffImage" },
		description: { __type: "String", __args: { asHtml: "Boolean" } },
		primaryOccupations: { __type: "[String]" },
		gender: { __type: "String" },
		dateOfBirth: { __type: "FuzzyDate" },
		dateOfDeath: { __type: "FuzzyDate" },
		age: { __type: "Int" },
		yearsActive: { __type: "[Int]" },
		homeTown: { __type: "String" },
		isFavourite: { __type: "Boolean!" },
		isFavouriteBlocked: { __type: "Boolean!" },
		siteUrl: { __type: "String" },
		staffMedia: {
			__type: "MediaConnection",
			__args: {
				sort: "[MediaSort]",
				type: "MediaType",
				onList: "Boolean",
				page: "Int",
				perPage: "Int",
			},
		},
		characters: {
			__type: "CharacterConnection",
			__args: { sort: "[CharacterSort]", page: "Int", perPage: "Int" },
		},
		characterMedia: {
			__type: "MediaConnection",
			__args: {
				sort: "[MediaSort]",
				onList: "Boolean",
				page: "Int",
				perPage: "Int",
			},
		},
		updatedAt: { __type: "Int" },
		staff: { __type: "Staff" },
		submitter: { __type: "User" },
		submissionStatus: { __type: "Int" },
		submissionNotes: { __type: "String" },
		favourites: { __type: "Int" },
		modNotes: { __type: "String" },
	},
	StaffName: {
		__typename: { __type: "String!" },
		first: { __type: "String" },
		middle: { __type: "String" },
		last: { __type: "String" },
		full: { __type: "String" },
		native: { __type: "String" },
		alternative: { __type: "[String]" },
	},
	StaffImage: {
		__typename: { __type: "String!" },
		large: { __type: "String" },
		medium: { __type: "String" },
	},
	StaffRoleType: {
		__typename: { __type: "String!" },
		voiceActor: { __type: "Staff" },
		roleNotes: { __type: "String" },
		dubGroup: { __type: "String" },
	},
	StaffConnection: {
		__typename: { __type: "String!" },
		edges: { __type: "[StaffEdge]" },
		nodes: { __type: "[Staff]" },
		pageInfo: { __type: "PageInfo" },
	},
	StaffEdge: {
		__typename: { __type: "String!" },
		node: { __type: "Staff" },
		id: { __type: "Int" },
		role: { __type: "String" },
		favouriteOrder: { __type: "Int" },
	},
	StudioConnection: {
		__typename: { __type: "String!" },
		edges: { __type: "[StudioEdge]" },
		nodes: { __type: "[Studio]" },
		pageInfo: { __type: "PageInfo" },
	},
	StudioEdge: {
		__typename: { __type: "String!" },
		node: { __type: "Studio" },
		id: { __type: "Int" },
		isMain: { __type: "Boolean!" },
		favouriteOrder: { __type: "Int" },
	},
	Studio: {
		__typename: { __type: "String!" },
		id: { __type: "Int!" },
		name: { __type: "String!" },
		isAnimationStudio: { __type: "Boolean!" },
		media: {
			__type: "MediaConnection",
			__args: {
				sort: "[MediaSort]",
				isMain: "Boolean",
				onList: "Boolean",
				page: "Int",
				perPage: "Int",
			},
		},
		siteUrl: { __type: "String" },
		isFavourite: { __type: "Boolean!" },
		favourites: { __type: "Int" },
	},
	AiringSchedule: {
		__typename: { __type: "String!" },
		id: { __type: "Int!" },
		airingAt: { __type: "Int!" },
		timeUntilAiring: { __type: "Int!" },
		episode: { __type: "Int!" },
		mediaId: { __type: "Int!" },
		media: { __type: "Media" },
	},
	AiringScheduleConnection: {
		__typename: { __type: "String!" },
		edges: { __type: "[AiringScheduleEdge]" },
		nodes: { __type: "[AiringSchedule]" },
		pageInfo: { __type: "PageInfo" },
	},
	AiringScheduleEdge: {
		__typename: { __type: "String!" },
		node: { __type: "AiringSchedule" },
		id: { __type: "Int" },
	},
	MediaTrendConnection: {
		__typename: { __type: "String!" },
		edges: { __type: "[MediaTrendEdge]" },
		nodes: { __type: "[MediaTrend]" },
		pageInfo: { __type: "PageInfo" },
	},
	MediaTrendEdge: {
		__typename: { __type: "String!" },
		node: { __type: "MediaTrend" },
	},
	MediaTrend: {
		__typename: { __type: "String!" },
		mediaId: { __type: "Int!" },
		date: { __type: "Int!" },
		trending: { __type: "Int!" },
		averageScore: { __type: "Int" },
		popularity: { __type: "Int" },
		inProgress: { __type: "Int" },
		releasing: { __type: "Boolean!" },
		episode: { __type: "Int" },
		media: { __type: "Media" },
	},
	MediaExternalLink: {
		__typename: { __type: "String!" },
		id: { __type: "Int!" },
		url: { __type: "String!" },
		site: { __type: "String!" },
	},
	MediaStreamingEpisode: {
		__typename: { __type: "String!" },
		title: { __type: "String" },
		thumbnail: { __type: "String" },
		url: { __type: "String" },
		site: { __type: "String" },
	},
	MediaRank: {
		__typename: { __type: "String!" },
		id: { __type: "Int!" },
		rank: { __type: "Int!" },
		type: { __type: "MediaRankType!" },
		format: { __type: "MediaFormat!" },
		year: { __type: "Int" },
		season: { __type: "MediaSeason" },
		allTime: { __type: "Boolean" },
		context: { __type: "String!" },
	},
	MediaList: {
		__typename: { __type: "String!" },
		id: { __type: "Int!" },
		userId: { __type: "Int!" },
		mediaId: { __type: "Int!" },
		status: { __type: "MediaListStatus" },
		score: { __type: "Float", __args: { format: "ScoreFormat" } },
		progress: { __type: "Int" },
		progressVolumes: { __type: "Int" },
		repeat: { __type: "Int" },
		priority: { __type: "Int" },
		private: { __type: "Boolean" },
		notes: { __type: "String" },
		hiddenFromStatusLists: { __type: "Boolean" },
		customLists: { __type: "Json", __args: { asArray: "Boolean" } },
		advancedScores: { __type: "Json" },
		startedAt: { __type: "FuzzyDate" },
		completedAt: { __type: "FuzzyDate" },
		updatedAt: { __type: "Int" },
		createdAt: { __type: "Int" },
		media: { __type: "Media" },
		user: { __type: "User" },
	},
	ReviewConnection: {
		__typename: { __type: "String!" },
		edges: { __type: "[ReviewEdge]" },
		nodes: { __type: "[Review]" },
		pageInfo: { __type: "PageInfo" },
	},
	ReviewEdge: { __typename: { __type: "String!" }, node: { __type: "Review" } },
	Review: {
		__typename: { __type: "String!" },
		id: { __type: "Int!" },
		userId: { __type: "Int!" },
		mediaId: { __type: "Int!" },
		mediaType: { __type: "MediaType" },
		summary: { __type: "String" },
		body: { __type: "String", __args: { asHtml: "Boolean" } },
		rating: { __type: "Int" },
		ratingAmount: { __type: "Int" },
		userRating: { __type: "ReviewRating" },
		score: { __type: "Int" },
		private: { __type: "Boolean" },
		siteUrl: { __type: "String" },
		createdAt: { __type: "Int!" },
		updatedAt: { __type: "Int!" },
		user: { __type: "User" },
		media: { __type: "Media" },
	},
	RecommendationConnection: {
		__typename: { __type: "String!" },
		edges: { __type: "[RecommendationEdge]" },
		nodes: { __type: "[Recommendation]" },
		pageInfo: { __type: "PageInfo" },
	},
	RecommendationEdge: {
		__typename: { __type: "String!" },
		node: { __type: "Recommendation" },
	},
	Recommendation: {
		__typename: { __type: "String!" },
		id: { __type: "Int!" },
		rating: { __type: "Int" },
		userRating: { __type: "RecommendationRating" },
		media: { __type: "Media" },
		mediaRecommendation: { __type: "Media" },
		user: { __type: "User" },
	},
	MediaStats: {
		__typename: { __type: "String!" },
		scoreDistribution: { __type: "[ScoreDistribution]" },
		statusDistribution: { __type: "[StatusDistribution]" },
		airingProgression: { __type: "[AiringProgression]" },
	},
	ScoreDistribution: {
		__typename: { __type: "String!" },
		score: { __type: "Int" },
		amount: { __type: "Int" },
	},
	StatusDistribution: {
		__typename: { __type: "String!" },
		status: { __type: "MediaListStatus" },
		amount: { __type: "Int" },
	},
	AiringProgression: {
		__typename: { __type: "String!" },
		episode: { __type: "Float" },
		score: { __type: "Float" },
		watching: { __type: "Int" },
	},
	UserStatisticTypes: {
		__typename: { __type: "String!" },
		anime: { __type: "UserStatistics" },
		manga: { __type: "UserStatistics" },
	},
	UserStatistics: {
		__typename: { __type: "String!" },
		count: { __type: "Int!" },
		meanScore: { __type: "Float!" },
		standardDeviation: { __type: "Float!" },
		minutesWatched: { __type: "Int!" },
		episodesWatched: { __type: "Int!" },
		chaptersRead: { __type: "Int!" },
		volumesRead: { __type: "Int!" },
		formats: {
			__type: "[UserFormatStatistic]",
			__args: { limit: "Int", sort: "[UserStatisticsSort]" },
		},
		statuses: {
			__type: "[UserStatusStatistic]",
			__args: { limit: "Int", sort: "[UserStatisticsSort]" },
		},
		scores: {
			__type: "[UserScoreStatistic]",
			__args: { limit: "Int", sort: "[UserStatisticsSort]" },
		},
		lengths: {
			__type: "[UserLengthStatistic]",
			__args: { limit: "Int", sort: "[UserStatisticsSort]" },
		},
		releaseYears: {
			__type: "[UserReleaseYearStatistic]",
			__args: { limit: "Int", sort: "[UserStatisticsSort]" },
		},
		startYears: {
			__type: "[UserStartYearStatistic]",
			__args: { limit: "Int", sort: "[UserStatisticsSort]" },
		},
		genres: {
			__type: "[UserGenreStatistic]",
			__args: { limit: "Int", sort: "[UserStatisticsSort]" },
		},
		tags: {
			__type: "[UserTagStatistic]",
			__args: { limit: "Int", sort: "[UserStatisticsSort]" },
		},
		countries: {
			__type: "[UserCountryStatistic]",
			__args: { limit: "Int", sort: "[UserStatisticsSort]" },
		},
		voiceActors: {
			__type: "[UserVoiceActorStatistic]",
			__args: { limit: "Int", sort: "[UserStatisticsSort]" },
		},
		staff: {
			__type: "[UserStaffStatistic]",
			__args: { limit: "Int", sort: "[UserStatisticsSort]" },
		},
		studios: {
			__type: "[UserStudioStatistic]",
			__args: { limit: "Int", sort: "[UserStatisticsSort]" },
		},
	},
	UserFormatStatistic: {
		__typename: { __type: "String!" },
		count: { __type: "Int!" },
		meanScore: { __type: "Float!" },
		minutesWatched: { __type: "Int!" },
		chaptersRead: { __type: "Int!" },
		mediaIds: { __type: "[Int]!" },
		format: { __type: "MediaFormat" },
	},
	UserStatusStatistic: {
		__typename: { __type: "String!" },
		count: { __type: "Int!" },
		meanScore: { __type: "Float!" },
		minutesWatched: { __type: "Int!" },
		chaptersRead: { __type: "Int!" },
		mediaIds: { __type: "[Int]!" },
		status: { __type: "MediaListStatus" },
	},
	UserScoreStatistic: {
		__typename: { __type: "String!" },
		count: { __type: "Int!" },
		meanScore: { __type: "Float!" },
		minutesWatched: { __type: "Int!" },
		chaptersRead: { __type: "Int!" },
		mediaIds: { __type: "[Int]!" },
		score: { __type: "Int" },
	},
	UserLengthStatistic: {
		__typename: { __type: "String!" },
		count: { __type: "Int!" },
		meanScore: { __type: "Float!" },
		minutesWatched: { __type: "Int!" },
		chaptersRead: { __type: "Int!" },
		mediaIds: { __type: "[Int]!" },
		length: { __type: "String" },
	},
	UserReleaseYearStatistic: {
		__typename: { __type: "String!" },
		count: { __type: "Int!" },
		meanScore: { __type: "Float!" },
		minutesWatched: { __type: "Int!" },
		chaptersRead: { __type: "Int!" },
		mediaIds: { __type: "[Int]!" },
		releaseYear: { __type: "Int" },
	},
	UserStartYearStatistic: {
		__typename: { __type: "String!" },
		count: { __type: "Int!" },
		meanScore: { __type: "Float!" },
		minutesWatched: { __type: "Int!" },
		chaptersRead: { __type: "Int!" },
		mediaIds: { __type: "[Int]!" },
		startYear: { __type: "Int" },
	},
	UserGenreStatistic: {
		__typename: { __type: "String!" },
		count: { __type: "Int!" },
		meanScore: { __type: "Float!" },
		minutesWatched: { __type: "Int!" },
		chaptersRead: { __type: "Int!" },
		mediaIds: { __type: "[Int]!" },
		genre: { __type: "String" },
	},
	UserTagStatistic: {
		__typename: { __type: "String!" },
		count: { __type: "Int!" },
		meanScore: { __type: "Float!" },
		minutesWatched: { __type: "Int!" },
		chaptersRead: { __type: "Int!" },
		mediaIds: { __type: "[Int]!" },
		tag: { __type: "MediaTag" },
	},
	UserCountryStatistic: {
		__typename: { __type: "String!" },
		count: { __type: "Int!" },
		meanScore: { __type: "Float!" },
		minutesWatched: { __type: "Int!" },
		chaptersRead: { __type: "Int!" },
		mediaIds: { __type: "[Int]!" },
		country: { __type: "CountryCode" },
	},
	UserVoiceActorStatistic: {
		__typename: { __type: "String!" },
		count: { __type: "Int!" },
		meanScore: { __type: "Float!" },
		minutesWatched: { __type: "Int!" },
		chaptersRead: { __type: "Int!" },
		mediaIds: { __type: "[Int]!" },
		voiceActor: { __type: "Staff" },
		characterIds: { __type: "[Int]!" },
	},
	UserStaffStatistic: {
		__typename: { __type: "String!" },
		count: { __type: "Int!" },
		meanScore: { __type: "Float!" },
		minutesWatched: { __type: "Int!" },
		chaptersRead: { __type: "Int!" },
		mediaIds: { __type: "[Int]!" },
		staff: { __type: "Staff" },
	},
	UserStudioStatistic: {
		__typename: { __type: "String!" },
		count: { __type: "Int!" },
		meanScore: { __type: "Float!" },
		minutesWatched: { __type: "Int!" },
		chaptersRead: { __type: "Int!" },
		mediaIds: { __type: "[Int]!" },
		studio: { __type: "Studio" },
	},
	UserStats: {
		__typename: { __type: "String!" },
		watchedTime: { __type: "Int" },
		chaptersRead: { __type: "Int" },
		activityHistory: { __type: "[UserActivityHistory]" },
		animeStatusDistribution: { __type: "[StatusDistribution]" },
		mangaStatusDistribution: { __type: "[StatusDistribution]" },
		animeScoreDistribution: { __type: "[ScoreDistribution]" },
		mangaScoreDistribution: { __type: "[ScoreDistribution]" },
		animeListScores: { __type: "ListScoreStats" },
		mangaListScores: { __type: "ListScoreStats" },
		favouredGenresOverview: { __type: "[GenreStats]" },
		favouredGenres: { __type: "[GenreStats]" },
		favouredTags: { __type: "[TagStats]" },
		favouredActors: { __type: "[StaffStats]" },
		favouredStaff: { __type: "[StaffStats]" },
		favouredStudios: { __type: "[StudioStats]" },
		favouredYears: { __type: "[YearStats]" },
		favouredFormats: { __type: "[FormatStats]" },
	},
	UserActivityHistory: {
		__typename: { __type: "String!" },
		date: { __type: "Int" },
		amount: { __type: "Int" },
		level: { __type: "Int" },
	},
	ListScoreStats: {
		__typename: { __type: "String!" },
		meanScore: { __type: "Int" },
		standardDeviation: { __type: "Int" },
	},
	GenreStats: {
		__typename: { __type: "String!" },
		genre: { __type: "String" },
		amount: { __type: "Int" },
		meanScore: { __type: "Int" },
		timeWatched: { __type: "Int" },
	},
	TagStats: {
		__typename: { __type: "String!" },
		tag: { __type: "MediaTag" },
		amount: { __type: "Int" },
		meanScore: { __type: "Int" },
		timeWatched: { __type: "Int" },
	},
	StaffStats: {
		__typename: { __type: "String!" },
		staff: { __type: "Staff" },
		amount: { __type: "Int" },
		meanScore: { __type: "Int" },
		timeWatched: { __type: "Int" },
	},
	StudioStats: {
		__typename: { __type: "String!" },
		studio: { __type: "Studio" },
		amount: { __type: "Int" },
		meanScore: { __type: "Int" },
		timeWatched: { __type: "Int" },
	},
	YearStats: {
		__typename: { __type: "String!" },
		year: { __type: "Int" },
		amount: { __type: "Int" },
		meanScore: { __type: "Int" },
	},
	FormatStats: {
		__typename: { __type: "String!" },
		format: { __type: "MediaFormat" },
		amount: { __type: "Int" },
	},
	AiringNotification: {
		__typename: { __type: "String!" },
		id: { __type: "Int!" },
		type: { __type: "NotificationType" },
		animeId: { __type: "Int!" },
		episode: { __type: "Int!" },
		contexts: { __type: "[String]" },
		createdAt: { __type: "Int" },
		media: { __type: "Media" },
	},
	FollowingNotification: {
		__typename: { __type: "String!" },
		id: { __type: "Int!" },
		userId: { __type: "Int!" },
		type: { __type: "NotificationType" },
		context: { __type: "String" },
		createdAt: { __type: "Int" },
		user: { __type: "User" },
	},
	ActivityMessageNotification: {
		__typename: { __type: "String!" },
		id: { __type: "Int!" },
		userId: { __type: "Int!" },
		type: { __type: "NotificationType" },
		activityId: { __type: "Int!" },
		context: { __type: "String" },
		createdAt: { __type: "Int" },
		message: { __type: "MessageActivity" },
		user: { __type: "User" },
	},
	MessageActivity: {
		__typename: { __type: "String!" },
		id: { __type: "Int!" },
		recipientId: { __type: "Int" },
		messengerId: { __type: "Int" },
		type: { __type: "ActivityType" },
		replyCount: { __type: "Int!" },
		message: { __type: "String", __args: { asHtml: "Boolean" } },
		isLocked: { __type: "Boolean" },
		isSubscribed: { __type: "Boolean" },
		likeCount: { __type: "Int!" },
		isLiked: { __type: "Boolean" },
		isPrivate: { __type: "Boolean" },
		siteUrl: { __type: "String" },
		createdAt: { __type: "Int!" },
		recipient: { __type: "User" },
		messenger: { __type: "User" },
		replies: { __type: "[ActivityReply]" },
		likes: { __type: "[User]" },
	},
	ActivityReply: {
		__typename: { __type: "String!" },
		id: { __type: "Int!" },
		userId: { __type: "Int" },
		activityId: { __type: "Int" },
		text: { __type: "String", __args: { asHtml: "Boolean" } },
		likeCount: { __type: "Int!" },
		isLiked: { __type: "Boolean" },
		createdAt: { __type: "Int!" },
		user: { __type: "User" },
		likes: { __type: "[User]" },
	},
	ActivityMentionNotification: {
		__typename: { __type: "String!" },
		id: { __type: "Int!" },
		userId: { __type: "Int!" },
		type: { __type: "NotificationType" },
		activityId: { __type: "Int!" },
		context: { __type: "String" },
		createdAt: { __type: "Int" },
		activity: { __type: "ActivityUnion" },
		user: { __type: "User" },
	},
	TextActivity: {
		__typename: { __type: "String!" },
		id: { __type: "Int!" },
		userId: { __type: "Int" },
		type: { __type: "ActivityType" },
		replyCount: { __type: "Int!" },
		text: { __type: "String", __args: { asHtml: "Boolean" } },
		siteUrl: { __type: "String" },
		isLocked: { __type: "Boolean" },
		isSubscribed: { __type: "Boolean" },
		likeCount: { __type: "Int!" },
		isLiked: { __type: "Boolean" },
		createdAt: { __type: "Int!" },
		user: { __type: "User" },
		replies: { __type: "[ActivityReply]" },
		likes: { __type: "[User]" },
	},
	ListActivity: {
		__typename: { __type: "String!" },
		id: { __type: "Int!" },
		userId: { __type: "Int" },
		type: { __type: "ActivityType" },
		replyCount: { __type: "Int!" },
		status: { __type: "String" },
		progress: { __type: "String" },
		isLocked: { __type: "Boolean" },
		isSubscribed: { __type: "Boolean" },
		likeCount: { __type: "Int!" },
		isLiked: { __type: "Boolean" },
		siteUrl: { __type: "String" },
		createdAt: { __type: "Int!" },
		user: { __type: "User" },
		media: { __type: "Media" },
		replies: { __type: "[ActivityReply]" },
		likes: { __type: "[User]" },
	},
	ActivityReplyNotification: {
		__typename: { __type: "String!" },
		id: { __type: "Int!" },
		userId: { __type: "Int!" },
		type: { __type: "NotificationType" },
		activityId: { __type: "Int!" },
		context: { __type: "String" },
		createdAt: { __type: "Int" },
		activity: { __type: "ActivityUnion" },
		user: { __type: "User" },
	},
	ActivityReplySubscribedNotification: {
		__typename: { __type: "String!" },
		id: { __type: "Int!" },
		userId: { __type: "Int!" },
		type: { __type: "NotificationType" },
		activityId: { __type: "Int!" },
		context: { __type: "String" },
		createdAt: { __type: "Int" },
		activity: { __type: "ActivityUnion" },
		user: { __type: "User" },
	},
	ActivityLikeNotification: {
		__typename: { __type: "String!" },
		id: { __type: "Int!" },
		userId: { __type: "Int!" },
		type: { __type: "NotificationType" },
		activityId: { __type: "Int!" },
		context: { __type: "String" },
		createdAt: { __type: "Int" },
		activity: { __type: "ActivityUnion" },
		user: { __type: "User" },
	},
	ActivityReplyLikeNotification: {
		__typename: { __type: "String!" },
		id: { __type: "Int!" },
		userId: { __type: "Int!" },
		type: { __type: "NotificationType" },
		activityId: { __type: "Int!" },
		context: { __type: "String" },
		createdAt: { __type: "Int" },
		activity: { __type: "ActivityUnion" },
		user: { __type: "User" },
	},
	ThreadCommentMentionNotification: {
		__typename: { __type: "String!" },
		id: { __type: "Int!" },
		userId: { __type: "Int!" },
		type: { __type: "NotificationType" },
		commentId: { __type: "Int!" },
		context: { __type: "String" },
		createdAt: { __type: "Int" },
		thread: { __type: "Thread" },
		comment: { __type: "ThreadComment" },
		user: { __type: "User" },
	},
	Thread: {
		__typename: { __type: "String!" },
		id: { __type: "Int!" },
		title: { __type: "String" },
		body: { __type: "String", __args: { asHtml: "Boolean" } },
		userId: { __type: "Int!" },
		replyUserId: { __type: "Int" },
		replyCommentId: { __type: "Int" },
		replyCount: { __type: "Int" },
		viewCount: { __type: "Int" },
		isLocked: { __type: "Boolean" },
		isSticky: { __type: "Boolean" },
		isSubscribed: { __type: "Boolean" },
		likeCount: { __type: "Int!" },
		isLiked: { __type: "Boolean" },
		repliedAt: { __type: "Int" },
		createdAt: { __type: "Int!" },
		updatedAt: { __type: "Int!" },
		user: { __type: "User" },
		replyUser: { __type: "User" },
		likes: { __type: "[User]" },
		siteUrl: { __type: "String" },
		categories: { __type: "[ThreadCategory]" },
		mediaCategories: { __type: "[Media]" },
	},
	ThreadCategory: {
		__typename: { __type: "String!" },
		id: { __type: "Int!" },
		name: { __type: "String!" },
	},
	ThreadComment: {
		__typename: { __type: "String!" },
		id: { __type: "Int!" },
		userId: { __type: "Int" },
		threadId: { __type: "Int" },
		comment: { __type: "String", __args: { asHtml: "Boolean" } },
		likeCount: { __type: "Int!" },
		isLiked: { __type: "Boolean" },
		siteUrl: { __type: "String" },
		createdAt: { __type: "Int!" },
		updatedAt: { __type: "Int!" },
		thread: { __type: "Thread" },
		user: { __type: "User" },
		likes: { __type: "[User]" },
		childComments: { __type: "Json" },
	},
	ThreadCommentReplyNotification: {
		__typename: { __type: "String!" },
		id: { __type: "Int!" },
		userId: { __type: "Int!" },
		type: { __type: "NotificationType" },
		commentId: { __type: "Int!" },
		context: { __type: "String" },
		createdAt: { __type: "Int" },
		thread: { __type: "Thread" },
		comment: { __type: "ThreadComment" },
		user: { __type: "User" },
	},
	ThreadCommentSubscribedNotification: {
		__typename: { __type: "String!" },
		id: { __type: "Int!" },
		userId: { __type: "Int!" },
		type: { __type: "NotificationType" },
		commentId: { __type: "Int!" },
		context: { __type: "String" },
		createdAt: { __type: "Int" },
		thread: { __type: "Thread" },
		comment: { __type: "ThreadComment" },
		user: { __type: "User" },
	},
	ThreadCommentLikeNotification: {
		__typename: { __type: "String!" },
		id: { __type: "Int!" },
		userId: { __type: "Int!" },
		type: { __type: "NotificationType" },
		commentId: { __type: "Int!" },
		context: { __type: "String" },
		createdAt: { __type: "Int" },
		thread: { __type: "Thread" },
		comment: { __type: "ThreadComment" },
		user: { __type: "User" },
	},
	ThreadLikeNotification: {
		__typename: { __type: "String!" },
		id: { __type: "Int!" },
		userId: { __type: "Int!" },
		type: { __type: "NotificationType" },
		threadId: { __type: "Int!" },
		context: { __type: "String" },
		createdAt: { __type: "Int" },
		thread: { __type: "Thread" },
		comment: { __type: "ThreadComment" },
		user: { __type: "User" },
	},
	RelatedMediaAdditionNotification: {
		__typename: { __type: "String!" },
		id: { __type: "Int!" },
		type: { __type: "NotificationType" },
		mediaId: { __type: "Int!" },
		context: { __type: "String" },
		createdAt: { __type: "Int" },
		media: { __type: "Media" },
	},
	MediaListCollection: {
		__typename: { __type: "String!" },
		lists: { __type: "[MediaListGroup]" },
		user: { __type: "User" },
		hasNextChunk: { __type: "Boolean" },
		statusLists: { __type: "[[MediaList]]", __args: { asArray: "Boolean" } },
		customLists: { __type: "[[MediaList]]", __args: { asArray: "Boolean" } },
	},
	MediaListGroup: {
		__typename: { __type: "String!" },
		entries: { __type: "[MediaList]" },
		name: { __type: "String" },
		isCustomList: { __type: "Boolean" },
		isSplitCompletedList: { __type: "Boolean" },
		status: { __type: "MediaListStatus" },
	},
	ParsedMarkdown: {
		__typename: { __type: "String!" },
		html: { __type: "String" },
	},
	AniChartUser: {
		__typename: { __type: "String!" },
		user: { __type: "User" },
		settings: { __type: "Json" },
		highlights: { __type: "Json" },
	},
	SiteStatistics: {
		__typename: { __type: "String!" },
		users: {
			__type: "SiteTrendConnection",
			__args: { sort: "[SiteTrendSort]", page: "Int", perPage: "Int" },
		},
		anime: {
			__type: "SiteTrendConnection",
			__args: { sort: "[SiteTrendSort]", page: "Int", perPage: "Int" },
		},
		manga: {
			__type: "SiteTrendConnection",
			__args: { sort: "[SiteTrendSort]", page: "Int", perPage: "Int" },
		},
		characters: {
			__type: "SiteTrendConnection",
			__args: { sort: "[SiteTrendSort]", page: "Int", perPage: "Int" },
		},
		staff: {
			__type: "SiteTrendConnection",
			__args: { sort: "[SiteTrendSort]", page: "Int", perPage: "Int" },
		},
		studios: {
			__type: "SiteTrendConnection",
			__args: { sort: "[SiteTrendSort]", page: "Int", perPage: "Int" },
		},
		reviews: {
			__type: "SiteTrendConnection",
			__args: { sort: "[SiteTrendSort]", page: "Int", perPage: "Int" },
		},
	},
	SiteTrendConnection: {
		__typename: { __type: "String!" },
		edges: { __type: "[SiteTrendEdge]" },
		nodes: { __type: "[SiteTrend]" },
		pageInfo: { __type: "PageInfo" },
	},
	SiteTrendEdge: {
		__typename: { __type: "String!" },
		node: { __type: "SiteTrend" },
	},
	SiteTrend: {
		__typename: { __type: "String!" },
		date: { __type: "Int!" },
		count: { __type: "Int!" },
		change: { __type: "Int!" },
	},
	NotificationOptionInput: {
		type: { __type: "NotificationType" },
		enabled: { __type: "Boolean" },
	},
	MediaListOptionsInput: {
		sectionOrder: { __type: "[String]" },
		splitCompletedSectionByFormat: { __type: "Boolean" },
		customLists: { __type: "[String]" },
		advancedScoring: { __type: "[String]" },
		advancedScoringEnabled: { __type: "Boolean" },
		theme: { __type: "String" },
	},
	FuzzyDateInput: {
		year: { __type: "Int" },
		month: { __type: "Int" },
		day: { __type: "Int" },
	},
	Deleted: {
		__typename: { __type: "String!" },
		deleted: { __type: "Boolean" },
	},
	AniChartHighlightInput: {
		mediaId: { __type: "Int" },
		highlight: { __type: "String" },
	},
	InternalPage: {
		__typename: { __type: "String!" },
		mediaSubmissions: {
			__type: "[MediaSubmission]",
			__args: {
				mediaId: "Int",
				submissionId: "Int",
				userId: "Int",
				status: "SubmissionStatus",
				type: "MediaType",
				sort: "[SubmissionSort]",
			},
		},
		characterSubmissions: {
			__type: "[CharacterSubmission]",
			__args: {
				characterId: "Int",
				userId: "Int",
				status: "SubmissionStatus",
				sort: "[SubmissionSort]",
			},
		},
		staffSubmissions: {
			__type: "[StaffSubmission]",
			__args: {
				staffId: "Int",
				userId: "Int",
				status: "SubmissionStatus",
				sort: "[SubmissionSort]",
			},
		},
		revisionHistory: {
			__type: "[RevisionHistory]",
			__args: {
				userId: "Int",
				mediaId: "Int",
				characterId: "Int",
				staffId: "Int",
				studioId: "Int",
			},
		},
		reports: { __type: "[Report]" },
		modActions: {
			__type: "[ModAction]",
			__args: { userId: "Int", modId: "Int" },
		},
		pageInfo: { __type: "PageInfo" },
		users: {
			__type: "[User]",
			__args: {
				id: "Int",
				name: "String",
				search: "String",
				sort: "[UserSort]",
			},
		},
		media: {
			__type: "[Media]",
			__args: {
				id: "Int",
				idMal: "Int",
				startDate: "FuzzyDateInt",
				endDate: "FuzzyDateInt",
				season: "MediaSeason",
				seasonYear: "Int",
				type: "MediaType",
				format: "MediaFormat",
				status: "MediaStatus",
				episodes: "Int",
				duration: "Int",
				chapters: "Int",
				volumes: "Int",
				isAdult: "Boolean",
				genre: "String",
				tag: "String",
				minimumTagRank: "Int",
				tagCategory: "String",
				onList: "Boolean",
				licensedBy: "String",
				averageScore: "Int",
				popularity: "Int",
				source: "MediaSource",
				countryOfOrigin: "CountryCode",
				search: "String",
				id_not: "Int",
				id_in: "[Int]",
				id_not_in: "[Int]",
				idMal_not: "Int",
				idMal_in: "[Int]",
				idMal_not_in: "[Int]",
				startDate_greater: "FuzzyDateInt",
				startDate_lesser: "FuzzyDateInt",
				startDate_like: "String",
				endDate_greater: "FuzzyDateInt",
				endDate_lesser: "FuzzyDateInt",
				endDate_like: "String",
				format_in: "[MediaFormat]",
				format_not: "MediaFormat",
				format_not_in: "[MediaFormat]",
				status_in: "[MediaStatus]",
				status_not: "MediaStatus",
				status_not_in: "[MediaStatus]",
				episodes_greater: "Int",
				episodes_lesser: "Int",
				duration_greater: "Int",
				duration_lesser: "Int",
				chapters_greater: "Int",
				chapters_lesser: "Int",
				volumes_greater: "Int",
				volumes_lesser: "Int",
				genre_in: "[String]",
				genre_not_in: "[String]",
				tag_in: "[String]",
				tag_not_in: "[String]",
				tagCategory_in: "[String]",
				tagCategory_not_in: "[String]",
				licensedBy_in: "[String]",
				averageScore_not: "Int",
				averageScore_greater: "Int",
				averageScore_lesser: "Int",
				popularity_not: "Int",
				popularity_greater: "Int",
				popularity_lesser: "Int",
				source_in: "[MediaSource]",
				sort: "[MediaSort]",
			},
		},
		characters: {
			__type: "[Character]",
			__args: {
				id: "Int",
				isBirthday: "Boolean",
				search: "String",
				id_not: "Int",
				id_in: "[Int]",
				id_not_in: "[Int]",
				sort: "[CharacterSort]",
			},
		},
		staff: {
			__type: "[Staff]",
			__args: {
				id: "Int",
				isBirthday: "Boolean",
				search: "String",
				id_not: "Int",
				id_in: "[Int]",
				id_not_in: "[Int]",
				sort: "[StaffSort]",
			},
		},
		studios: {
			__type: "[Studio]",
			__args: {
				id: "Int",
				search: "String",
				id_not: "Int",
				id_in: "[Int]",
				id_not_in: "[Int]",
				sort: "[StudioSort]",
			},
		},
		mediaList: {
			__type: "[MediaList]",
			__args: {
				id: "Int",
				userId: "Int",
				userName: "String",
				type: "MediaType",
				status: "MediaListStatus",
				mediaId: "Int",
				isFollowing: "Boolean",
				notes: "String",
				startedAt: "FuzzyDateInt",
				completedAt: "FuzzyDateInt",
				compareWithAuthList: "Boolean",
				userId_in: "[Int]",
				status_in: "[MediaListStatus]",
				status_not_in: "[MediaListStatus]",
				status_not: "MediaListStatus",
				mediaId_in: "[Int]",
				mediaId_not_in: "[Int]",
				notes_like: "String",
				startedAt_greater: "FuzzyDateInt",
				startedAt_lesser: "FuzzyDateInt",
				startedAt_like: "String",
				completedAt_greater: "FuzzyDateInt",
				completedAt_lesser: "FuzzyDateInt",
				completedAt_like: "String",
				sort: "[MediaListSort]",
			},
		},
		airingSchedules: {
			__type: "[AiringSchedule]",
			__args: {
				id: "Int",
				mediaId: "Int",
				episode: "Int",
				airingAt: "Int",
				notYetAired: "Boolean",
				id_not: "Int",
				id_in: "[Int]",
				id_not_in: "[Int]",
				mediaId_not: "Int",
				mediaId_in: "[Int]",
				mediaId_not_in: "[Int]",
				episode_not: "Int",
				episode_in: "[Int]",
				episode_not_in: "[Int]",
				episode_greater: "Int",
				episode_lesser: "Int",
				airingAt_greater: "Int",
				airingAt_lesser: "Int",
				sort: "[AiringSort]",
			},
		},
		mediaTrends: {
			__type: "[MediaTrend]",
			__args: {
				mediaId: "Int",
				date: "Int",
				trending: "Int",
				averageScore: "Int",
				popularity: "Int",
				episode: "Int",
				releasing: "Boolean",
				mediaId_not: "Int",
				mediaId_in: "[Int]",
				mediaId_not_in: "[Int]",
				date_greater: "Int",
				date_lesser: "Int",
				trending_greater: "Int",
				trending_lesser: "Int",
				trending_not: "Int",
				averageScore_greater: "Int",
				averageScore_lesser: "Int",
				averageScore_not: "Int",
				popularity_greater: "Int",
				popularity_lesser: "Int",
				popularity_not: "Int",
				episode_greater: "Int",
				episode_lesser: "Int",
				episode_not: "Int",
				sort: "[MediaTrendSort]",
			},
		},
		notifications: {
			__type: "[NotificationUnion]",
			__args: {
				type: "NotificationType",
				resetNotificationCount: "Boolean",
				type_in: "[NotificationType]",
			},
		},
		followers: {
			__type: "[User]",
			__args: { userId: "Int!", sort: "[UserSort]" },
		},
		following: {
			__type: "[User]",
			__args: { userId: "Int!", sort: "[UserSort]" },
		},
		activities: {
			__type: "[ActivityUnion]",
			__args: {
				id: "Int",
				userId: "Int",
				messengerId: "Int",
				mediaId: "Int",
				type: "ActivityType",
				isFollowing: "Boolean",
				hasReplies: "Boolean",
				hasRepliesOrTypeText: "Boolean",
				createdAt: "Int",
				id_not: "Int",
				id_in: "[Int]",
				id_not_in: "[Int]",
				userId_not: "Int",
				userId_in: "[Int]",
				userId_not_in: "[Int]",
				messengerId_not: "Int",
				messengerId_in: "[Int]",
				messengerId_not_in: "[Int]",
				mediaId_not: "Int",
				mediaId_in: "[Int]",
				mediaId_not_in: "[Int]",
				type_not: "ActivityType",
				type_in: "[ActivityType]",
				type_not_in: "[ActivityType]",
				createdAt_greater: "Int",
				createdAt_lesser: "Int",
				sort: "[ActivitySort]",
			},
		},
		activityReplies: {
			__type: "[ActivityReply]",
			__args: { id: "Int", activityId: "Int" },
		},
		threads: {
			__type: "[Thread]",
			__args: {
				id: "Int",
				userId: "Int",
				replyUserId: "Int",
				subscribed: "Boolean",
				categoryId: "Int",
				mediaCategoryId: "Int",
				search: "String",
				id_in: "[Int]",
				sort: "[ThreadSort]",
			},
		},
		threadComments: {
			__type: "[ThreadComment]",
			__args: {
				id: "Int",
				threadId: "Int",
				userId: "Int",
				sort: "[ThreadCommentSort]",
			},
		},
		reviews: {
			__type: "[Review]",
			__args: {
				id: "Int",
				mediaId: "Int",
				userId: "Int",
				mediaType: "MediaType",
				sort: "[ReviewSort]",
			},
		},
		recommendations: {
			__type: "[Recommendation]",
			__args: {
				id: "Int",
				mediaId: "Int",
				mediaRecommendationId: "Int",
				userId: "Int",
				rating: "Int",
				onList: "Boolean",
				rating_greater: "Int",
				rating_lesser: "Int",
				sort: "[RecommendationSort]",
			},
		},
		likes: {
			__type: "[User]",
			__args: { likeableId: "Int", type: "LikeableType" },
		},
	},
	MediaSubmission: {
		__typename: { __type: "String!" },
		id: { __type: "Int!" },
		submitter: { __type: "User" },
		status: { __type: "SubmissionStatus" },
		submitterStats: { __type: "Json" },
		notes: { __type: "String" },
		source: { __type: "String" },
		changes: { __type: "[String]" },
		media: { __type: "Media" },
		submission: { __type: "Media" },
		characters: { __type: "[MediaSubmissionComparison]" },
		staff: { __type: "[MediaSubmissionComparison]" },
		studios: { __type: "[MediaSubmissionComparison]" },
		relations: { __type: "[MediaEdge]" },
		externalLinks: { __type: "[MediaExternalLink]" },
		createdAt: { __type: "Int" },
	},
	MediaSubmissionComparison: {
		__typename: { __type: "String!" },
		submission: { __type: "MediaSubmissionEdge" },
		character: { __type: "MediaCharacter" },
		staff: { __type: "StaffEdge" },
		studio: { __type: "StudioEdge" },
	},
	MediaSubmissionEdge: {
		__typename: { __type: "String!" },
		id: { __type: "Int" },
		characterRole: { __type: "CharacterRole" },
		staffRole: { __type: "String" },
		roleNotes: { __type: "String" },
		dubGroup: { __type: "String" },
		characterName: { __type: "String" },
		isMain: { __type: "Boolean" },
		character: { __type: "Character" },
		characterSubmission: { __type: "Character" },
		voiceActor: { __type: "Staff" },
		voiceActorSubmission: { __type: "Staff" },
		staff: { __type: "Staff" },
		staffSubmission: { __type: "Staff" },
		studio: { __type: "Studio" },
		media: { __type: "Media" },
	},
	MediaCharacter: {
		__typename: { __type: "String!" },
		id: { __type: "Int" },
		role: { __type: "CharacterRole" },
		roleNotes: { __type: "String" },
		dubGroup: { __type: "String" },
		characterName: { __type: "String" },
		character: { __type: "Character" },
		voiceActor: { __type: "Staff" },
	},
	CharacterSubmission: {
		__typename: { __type: "String!" },
		id: { __type: "Int!" },
		character: { __type: "Character" },
		submission: { __type: "Character" },
		submitter: { __type: "User" },
		status: { __type: "SubmissionStatus" },
		notes: { __type: "String" },
		source: { __type: "String" },
		createdAt: { __type: "Int" },
	},
	StaffSubmission: {
		__typename: { __type: "String!" },
		id: { __type: "Int!" },
		staff: { __type: "Staff" },
		submission: { __type: "Staff" },
		submitter: { __type: "User" },
		status: { __type: "SubmissionStatus" },
		notes: { __type: "String" },
		source: { __type: "String" },
		createdAt: { __type: "Int" },
	},
	RevisionHistory: {
		__typename: { __type: "String!" },
		id: { __type: "Int!" },
		action: { __type: "RevisionHistoryAction" },
		changes: { __type: "Json" },
		user: { __type: "User" },
		media: { __type: "Media" },
		character: { __type: "Character" },
		staff: { __type: "Staff" },
		studio: { __type: "Studio" },
		createdAt: { __type: "Int" },
	},
	Report: {
		__typename: { __type: "String!" },
		id: { __type: "Int!" },
		reporter: { __type: "User" },
		reported: { __type: "User" },
		reason: { __type: "String" },
		createdAt: { __type: "Int" },
	},
	ModAction: {
		__typename: { __type: "String!" },
		id: { __type: "Int!" },
		user: { __type: "User" },
		mod: { __type: "User" },
		type: { __type: "ModActionType" },
		objectId: { __type: "Int" },
		objectType: { __type: "String" },
		data: { __type: "String" },
		createdAt: { __type: "Int!" },
	},
	MediaTitleInput: {
		romaji: { __type: "String" },
		english: { __type: "String" },
		native: { __type: "String" },
	},
	MediaExternalLinkInput: {
		id: { __type: "Int!" },
		url: { __type: "String!" },
		site: { __type: "String!" },
	},
	AiringScheduleInput: {
		airingAt: { __type: "Int" },
		episode: { __type: "Int" },
		timeUntilAiring: { __type: "Int" },
	},
	CharacterNameInput: {
		first: { __type: "String" },
		middle: { __type: "String" },
		last: { __type: "String" },
		native: { __type: "String" },
		alternative: { __type: "[String]" },
		alternativeSpoiler: { __type: "[String]" },
	},
	CharacterSubmissionConnection: {
		__typename: { __type: "String!" },
		edges: { __type: "[CharacterSubmissionEdge]" },
		nodes: { __type: "[CharacterSubmission]" },
		pageInfo: { __type: "PageInfo" },
	},
	CharacterSubmissionEdge: {
		__typename: { __type: "String!" },
		node: { __type: "CharacterSubmission" },
		role: { __type: "CharacterRole" },
		voiceActors: { __type: "[Staff]" },
		submittedVoiceActors: { __type: "[StaffSubmission]" },
	},
	StaffNameInput: {
		first: { __type: "String" },
		middle: { __type: "String" },
		last: { __type: "String" },
		native: { __type: "String" },
		alternative: { __type: "[String]" },
	},
	UserModData: {
		__typename: { __type: "String!" },
		alts: { __type: "[User]" },
		bans: { __type: "Json" },
		ip: { __type: "Json" },
		counts: { __type: "Json" },
	},
	[SchemaUnionsKey]: {
		NotificationUnion: [
			"AiringNotification",
			"FollowingNotification",
			"ActivityMessageNotification",
			"ActivityMentionNotification",
			"ActivityReplyNotification",
			"ActivityReplySubscribedNotification",
			"ActivityLikeNotification",
			"ActivityReplyLikeNotification",
			"ThreadCommentMentionNotification",
			"ThreadCommentReplyNotification",
			"ThreadCommentSubscribedNotification",
			"ThreadCommentLikeNotification",
			"ThreadLikeNotification",
			"RelatedMediaAdditionNotification",
		],
		ActivityUnion: ["TextActivity", "ListActivity", "MessageActivity"],
		LikeableUnion: [
			"ListActivity",
			"TextActivity",
			"MessageActivity",
			"ActivityReply",
			"Thread",
			"ThreadComment",
		],
	},
} as const

export interface Query {
	__typename: "Query" | undefined
	Page: (args?: {
		/**
		 * The page number
		 */
		page?: Maybe<Scalars["Int"]>
		/**
		 * The amount of entries per page, max 50
		 */
		perPage?: Maybe<Scalars["Int"]>
	}) => Maybe<Page>
	/**
	 * Media query
	 */
	Media: (args?: {
		/**
		 * Filter by the media id
		 */
		id?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the media's MyAnimeList id
		 */
		idMal?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the start date of the media
		 */
		startDate?: Maybe<Scalars["FuzzyDateInt"]>
		/**
		 * Filter by the end date of the media
		 */
		endDate?: Maybe<Scalars["FuzzyDateInt"]>
		/**
		 * Filter by the season the media was released in
		 */
		season?: Maybe<MediaSeason>
		/**
		 * The year of the season (Winter 2017 would also include December 2016 releases). Requires season argument
		 */
		seasonYear?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the media's type
		 */
		type?: Maybe<MediaType>
		/**
		 * Filter by the media's format
		 */
		format?: Maybe<MediaFormat>
		/**
		 * Filter by the media's current release status
		 */
		status?: Maybe<MediaStatus>
		/**
		 * Filter by amount of episodes the media has
		 */
		episodes?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the media's episode length
		 */
		duration?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the media's chapter count
		 */
		chapters?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the media's volume count
		 */
		volumes?: Maybe<Scalars["Int"]>
		/**
		 * Filter by if the media's intended for 18+ adult audiences
		 */
		isAdult?: Maybe<Scalars["Boolean"]>
		/**
		 * Filter by the media's genres
		 */
		genre?: Maybe<Scalars["String"]>
		/**
		 * Filter by the media's tags
		 */
		tag?: Maybe<Scalars["String"]>
		/**
		 * Only apply the tags filter argument to tags above this rank. Default: 18
		 */
		minimumTagRank?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the media's tags with in a tag category
		 */
		tagCategory?: Maybe<Scalars["String"]>
		/**
		 * Filter by the media on the authenticated user's lists
		 */
		onList?: Maybe<Scalars["Boolean"]>
		/**
		 * Filter media by sites with a online streaming or reading license
		 */
		licensedBy?: Maybe<Scalars["String"]>
		/**
		 * Filter by the media's average score
		 */
		averageScore?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the number of users with this media on their list
		 */
		popularity?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the source type of the media
		 */
		source?: Maybe<MediaSource>
		/**
		 * Filter by the media's country of origin
		 */
		countryOfOrigin?: Maybe<Scalars["CountryCode"]>
		/**
		 * Filter by search query
		 */
		search?: Maybe<Scalars["String"]>
		/**
		 * Filter by the media id
		 */
		id_not?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the media id
		 */
		id_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
		/**
		 * Filter by the media id
		 */
		id_not_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
		/**
		 * Filter by the media's MyAnimeList id
		 */
		idMal_not?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the media's MyAnimeList id
		 */
		idMal_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
		/**
		 * Filter by the media's MyAnimeList id
		 */
		idMal_not_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
		/**
		 * Filter by the start date of the media
		 */
		startDate_greater?: Maybe<Scalars["FuzzyDateInt"]>
		/**
		 * Filter by the start date of the media
		 */
		startDate_lesser?: Maybe<Scalars["FuzzyDateInt"]>
		/**
		 * Filter by the start date of the media
		 */
		startDate_like?: Maybe<Scalars["String"]>
		/**
		 * Filter by the end date of the media
		 */
		endDate_greater?: Maybe<Scalars["FuzzyDateInt"]>
		/**
		 * Filter by the end date of the media
		 */
		endDate_lesser?: Maybe<Scalars["FuzzyDateInt"]>
		/**
		 * Filter by the end date of the media
		 */
		endDate_like?: Maybe<Scalars["String"]>
		/**
		 * Filter by the media's format
		 */
		format_in?: Maybe<Array<Maybe<MediaFormat>>>
		/**
		 * Filter by the media's format
		 */
		format_not?: Maybe<MediaFormat>
		/**
		 * Filter by the media's format
		 */
		format_not_in?: Maybe<Array<Maybe<MediaFormat>>>
		/**
		 * Filter by the media's current release status
		 */
		status_in?: Maybe<Array<Maybe<MediaStatus>>>
		/**
		 * Filter by the media's current release status
		 */
		status_not?: Maybe<MediaStatus>
		/**
		 * Filter by the media's current release status
		 */
		status_not_in?: Maybe<Array<Maybe<MediaStatus>>>
		/**
		 * Filter by amount of episodes the media has
		 */
		episodes_greater?: Maybe<Scalars["Int"]>
		/**
		 * Filter by amount of episodes the media has
		 */
		episodes_lesser?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the media's episode length
		 */
		duration_greater?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the media's episode length
		 */
		duration_lesser?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the media's chapter count
		 */
		chapters_greater?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the media's chapter count
		 */
		chapters_lesser?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the media's volume count
		 */
		volumes_greater?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the media's volume count
		 */
		volumes_lesser?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the media's genres
		 */
		genre_in?: Maybe<Array<Maybe<Scalars["String"]>>>
		/**
		 * Filter by the media's genres
		 */
		genre_not_in?: Maybe<Array<Maybe<Scalars["String"]>>>
		/**
		 * Filter by the media's tags
		 */
		tag_in?: Maybe<Array<Maybe<Scalars["String"]>>>
		/**
		 * Filter by the media's tags
		 */
		tag_not_in?: Maybe<Array<Maybe<Scalars["String"]>>>
		/**
		 * Filter by the media's tags with in a tag category
		 */
		tagCategory_in?: Maybe<Array<Maybe<Scalars["String"]>>>
		/**
		 * Filter by the media's tags with in a tag category
		 */
		tagCategory_not_in?: Maybe<Array<Maybe<Scalars["String"]>>>
		/**
		 * Filter media by sites with a online streaming or reading license
		 */
		licensedBy_in?: Maybe<Array<Maybe<Scalars["String"]>>>
		/**
		 * Filter by the media's average score
		 */
		averageScore_not?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the media's average score
		 */
		averageScore_greater?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the media's average score
		 */
		averageScore_lesser?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the number of users with this media on their list
		 */
		popularity_not?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the number of users with this media on their list
		 */
		popularity_greater?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the number of users with this media on their list
		 */
		popularity_lesser?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the source type of the media
		 */
		source_in?: Maybe<Array<Maybe<MediaSource>>>
		/**
		 * The order the results will be returned in
		 */
		sort?: Maybe<Array<Maybe<MediaSort>>>
	}) => Maybe<Media>
	/**
	 * Media Trend query
	 */
	MediaTrend: (args?: {
		/**
		 * Filter by the media id
		 */
		mediaId?: Maybe<Scalars["Int"]>
		/**
		 * Filter by date
		 */
		date?: Maybe<Scalars["Int"]>
		/**
		 * Filter by trending amount
		 */
		trending?: Maybe<Scalars["Int"]>
		/**
		 * Filter by score
		 */
		averageScore?: Maybe<Scalars["Int"]>
		/**
		 * Filter by popularity
		 */
		popularity?: Maybe<Scalars["Int"]>
		/**
		 * Filter by episode number
		 */
		episode?: Maybe<Scalars["Int"]>
		/**
		 * Filter to stats recorded while the media was releasing
		 */
		releasing?: Maybe<Scalars["Boolean"]>
		/**
		 * Filter by the media id
		 */
		mediaId_not?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the media id
		 */
		mediaId_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
		/**
		 * Filter by the media id
		 */
		mediaId_not_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
		/**
		 * Filter by date
		 */
		date_greater?: Maybe<Scalars["Int"]>
		/**
		 * Filter by date
		 */
		date_lesser?: Maybe<Scalars["Int"]>
		/**
		 * Filter by trending amount
		 */
		trending_greater?: Maybe<Scalars["Int"]>
		/**
		 * Filter by trending amount
		 */
		trending_lesser?: Maybe<Scalars["Int"]>
		/**
		 * Filter by trending amount
		 */
		trending_not?: Maybe<Scalars["Int"]>
		/**
		 * Filter by score
		 */
		averageScore_greater?: Maybe<Scalars["Int"]>
		/**
		 * Filter by score
		 */
		averageScore_lesser?: Maybe<Scalars["Int"]>
		/**
		 * Filter by score
		 */
		averageScore_not?: Maybe<Scalars["Int"]>
		/**
		 * Filter by popularity
		 */
		popularity_greater?: Maybe<Scalars["Int"]>
		/**
		 * Filter by popularity
		 */
		popularity_lesser?: Maybe<Scalars["Int"]>
		/**
		 * Filter by popularity
		 */
		popularity_not?: Maybe<Scalars["Int"]>
		/**
		 * Filter by episode number
		 */
		episode_greater?: Maybe<Scalars["Int"]>
		/**
		 * Filter by episode number
		 */
		episode_lesser?: Maybe<Scalars["Int"]>
		/**
		 * Filter by episode number
		 */
		episode_not?: Maybe<Scalars["Int"]>
		/**
		 * The order the results will be returned in
		 */
		sort?: Maybe<Array<Maybe<MediaTrendSort>>>
	}) => Maybe<MediaTrend>
	/**
	 * Airing schedule query
	 */
	AiringSchedule: (args?: {
		/**
		 * Filter by the id of the airing schedule item
		 */
		id?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the id of associated media
		 */
		mediaId?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the airing episode number
		 */
		episode?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the time of airing
		 */
		airingAt?: Maybe<Scalars["Int"]>
		/**
		 * Filter to episodes that haven't yet aired
		 */
		notYetAired?: Maybe<Scalars["Boolean"]>
		/**
		 * Filter by the id of the airing schedule item
		 */
		id_not?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the id of the airing schedule item
		 */
		id_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
		/**
		 * Filter by the id of the airing schedule item
		 */
		id_not_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
		/**
		 * Filter by the id of associated media
		 */
		mediaId_not?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the id of associated media
		 */
		mediaId_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
		/**
		 * Filter by the id of associated media
		 */
		mediaId_not_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
		/**
		 * Filter by the airing episode number
		 */
		episode_not?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the airing episode number
		 */
		episode_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
		/**
		 * Filter by the airing episode number
		 */
		episode_not_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
		/**
		 * Filter by the airing episode number
		 */
		episode_greater?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the airing episode number
		 */
		episode_lesser?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the time of airing
		 */
		airingAt_greater?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the time of airing
		 */
		airingAt_lesser?: Maybe<Scalars["Int"]>
		/**
		 * The order the results will be returned in
		 */
		sort?: Maybe<Array<Maybe<AiringSort>>>
	}) => Maybe<AiringSchedule>
	/**
	 * Character query
	 */
	Character: (args?: {
		/**
		 * Filter by character id
		 */
		id?: Maybe<Scalars["Int"]>
		/**
		 * Filter by character by if its their birthday today
		 */
		isBirthday?: Maybe<Scalars["Boolean"]>
		/**
		 * Filter by search query
		 */
		search?: Maybe<Scalars["String"]>
		/**
		 * Filter by character id
		 */
		id_not?: Maybe<Scalars["Int"]>
		/**
		 * Filter by character id
		 */
		id_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
		/**
		 * Filter by character id
		 */
		id_not_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
		/**
		 * The order the results will be returned in
		 */
		sort?: Maybe<Array<Maybe<CharacterSort>>>
	}) => Maybe<Character>
	/**
	 * Staff query
	 */
	Staff: (args?: {
		/**
		 * Filter by the staff id
		 */
		id?: Maybe<Scalars["Int"]>
		/**
		 * Filter by staff by if its their birthday today
		 */
		isBirthday?: Maybe<Scalars["Boolean"]>
		/**
		 * Filter by search query
		 */
		search?: Maybe<Scalars["String"]>
		/**
		 * Filter by the staff id
		 */
		id_not?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the staff id
		 */
		id_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
		/**
		 * Filter by the staff id
		 */
		id_not_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
		/**
		 * The order the results will be returned in
		 */
		sort?: Maybe<Array<Maybe<StaffSort>>>
	}) => Maybe<Staff>
	/**
	 * Media list query
	 */
	MediaList: (args?: {
		/**
		 * Filter by a list entry's id
		 */
		id?: Maybe<Scalars["Int"]>
		/**
		 * Filter by a user's id
		 */
		userId?: Maybe<Scalars["Int"]>
		/**
		 * Filter by a user's name
		 */
		userName?: Maybe<Scalars["String"]>
		/**
		 * Filter by the list entries media type
		 */
		type?: Maybe<MediaType>
		/**
		 * Filter by the watching/reading status
		 */
		status?: Maybe<MediaListStatus>
		/**
		 * Filter by the media id of the list entry
		 */
		mediaId?: Maybe<Scalars["Int"]>
		/**
		 * Filter list entries to users who are being followed by the authenticated user
		 */
		isFollowing?: Maybe<Scalars["Boolean"]>
		/**
		 * Filter by note words and #tags
		 */
		notes?: Maybe<Scalars["String"]>
		/**
		 * Filter by the date the user started the media
		 */
		startedAt?: Maybe<Scalars["FuzzyDateInt"]>
		/**
		 * Filter by the date the user completed the media
		 */
		completedAt?: Maybe<Scalars["FuzzyDateInt"]>
		/**
		 * Limit to only entries also on the auth user's list. Requires user id or name arguments.
		 */
		compareWithAuthList?: Maybe<Scalars["Boolean"]>
		/**
		 * Filter by a user's id
		 */
		userId_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
		/**
		 * Filter by the watching/reading status
		 */
		status_in?: Maybe<Array<Maybe<MediaListStatus>>>
		/**
		 * Filter by the watching/reading status
		 */
		status_not_in?: Maybe<Array<Maybe<MediaListStatus>>>
		/**
		 * Filter by the watching/reading status
		 */
		status_not?: Maybe<MediaListStatus>
		/**
		 * Filter by the media id of the list entry
		 */
		mediaId_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
		/**
		 * Filter by the media id of the list entry
		 */
		mediaId_not_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
		/**
		 * Filter by note words and #tags
		 */
		notes_like?: Maybe<Scalars["String"]>
		/**
		 * Filter by the date the user started the media
		 */
		startedAt_greater?: Maybe<Scalars["FuzzyDateInt"]>
		/**
		 * Filter by the date the user started the media
		 */
		startedAt_lesser?: Maybe<Scalars["FuzzyDateInt"]>
		/**
		 * Filter by the date the user started the media
		 */
		startedAt_like?: Maybe<Scalars["String"]>
		/**
		 * Filter by the date the user completed the media
		 */
		completedAt_greater?: Maybe<Scalars["FuzzyDateInt"]>
		/**
		 * Filter by the date the user completed the media
		 */
		completedAt_lesser?: Maybe<Scalars["FuzzyDateInt"]>
		/**
		 * Filter by the date the user completed the media
		 */
		completedAt_like?: Maybe<Scalars["String"]>
		/**
		 * The order the results will be returned in
		 */
		sort?: Maybe<Array<Maybe<MediaListSort>>>
	}) => Maybe<MediaList>
	/**
	 * Media list collection query, provides list pre-grouped by status & custom lists. User ID and Media Type arguments required.
	 */
	MediaListCollection: (args?: {
		/**
		 * Filter by a user's id
		 */
		userId?: Maybe<Scalars["Int"]>
		/**
		 * Filter by a user's name
		 */
		userName?: Maybe<Scalars["String"]>
		/**
		 * Filter by the list entries media type
		 */
		type?: Maybe<MediaType>
		/**
		 * Filter by the watching/reading status
		 */
		status?: Maybe<MediaListStatus>
		/**
		 * Filter by note words and #tags
		 */
		notes?: Maybe<Scalars["String"]>
		/**
		 * Filter by the date the user started the media
		 */
		startedAt?: Maybe<Scalars["FuzzyDateInt"]>
		/**
		 * Filter by the date the user completed the media
		 */
		completedAt?: Maybe<Scalars["FuzzyDateInt"]>
		/**
		 * Always return completed list entries in one group, overriding the user's split completed option.
		 */
		forceSingleCompletedList?: Maybe<Scalars["Boolean"]>
		/**
		 * Which chunk of list entries to load
		 */
		chunk?: Maybe<Scalars["Int"]>
		/**
		 * The amount of entries per chunk, max 500
		 */
		perChunk?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the watching/reading status
		 */
		status_in?: Maybe<Array<Maybe<MediaListStatus>>>
		/**
		 * Filter by the watching/reading status
		 */
		status_not_in?: Maybe<Array<Maybe<MediaListStatus>>>
		/**
		 * Filter by the watching/reading status
		 */
		status_not?: Maybe<MediaListStatus>
		/**
		 * Filter by note words and #tags
		 */
		notes_like?: Maybe<Scalars["String"]>
		/**
		 * Filter by the date the user started the media
		 */
		startedAt_greater?: Maybe<Scalars["FuzzyDateInt"]>
		/**
		 * Filter by the date the user started the media
		 */
		startedAt_lesser?: Maybe<Scalars["FuzzyDateInt"]>
		/**
		 * Filter by the date the user started the media
		 */
		startedAt_like?: Maybe<Scalars["String"]>
		/**
		 * Filter by the date the user completed the media
		 */
		completedAt_greater?: Maybe<Scalars["FuzzyDateInt"]>
		/**
		 * Filter by the date the user completed the media
		 */
		completedAt_lesser?: Maybe<Scalars["FuzzyDateInt"]>
		/**
		 * Filter by the date the user completed the media
		 */
		completedAt_like?: Maybe<Scalars["String"]>
		/**
		 * The order the results will be returned in
		 */
		sort?: Maybe<Array<Maybe<MediaListSort>>>
	}) => Maybe<MediaListCollection>
	/**
	 * Collection of all the possible media genres
	 */
	GenreCollection?: Maybe<Array<Maybe<ScalarsEnums["String"]>>>
	/**
	 * Collection of all the possible media tags
	 */
	MediaTagCollection: (args?: {
		/**
		 * Mod Only
		 */
		status?: Maybe<Scalars["Int"]>
	}) => Maybe<Array<Maybe<MediaTag>>>
	/**
	 * User query
	 */
	User: (args?: {
		/**
		 * Filter by the user id
		 */
		id?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the name of the user
		 */
		name?: Maybe<Scalars["String"]>
		/**
		 * Filter by search query
		 */
		search?: Maybe<Scalars["String"]>
		/**
		 * The order the results will be returned in
		 */
		sort?: Maybe<Array<Maybe<UserSort>>>
	}) => Maybe<User>
	/**
	 * Get the currently authenticated user
	 */
	Viewer?: Maybe<User>
	/**
	 * Notification query
	 */
	Notification: (args?: {
		/**
		 * Filter by the type of notifications
		 */
		type?: Maybe<NotificationType>
		/**
		 * Reset the unread notification count to 0 on load
		 */
		resetNotificationCount?: Maybe<Scalars["Boolean"]>
		/**
		 * Filter by the type of notifications
		 */
		type_in?: Maybe<Array<Maybe<NotificationType>>>
	}) => Maybe<NotificationUnion>
	/**
	 * Studio query
	 */
	Studio: (args?: {
		/**
		 * Filter by the studio id
		 */
		id?: Maybe<Scalars["Int"]>
		/**
		 * Filter by search query
		 */
		search?: Maybe<Scalars["String"]>
		/**
		 * Filter by the studio id
		 */
		id_not?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the studio id
		 */
		id_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
		/**
		 * Filter by the studio id
		 */
		id_not_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
		/**
		 * The order the results will be returned in
		 */
		sort?: Maybe<Array<Maybe<StudioSort>>>
	}) => Maybe<Studio>
	/**
	 * Review query
	 */
	Review: (args?: {
		/**
		 * Filter by Review id
		 */
		id?: Maybe<Scalars["Int"]>
		/**
		 * Filter by media id
		 */
		mediaId?: Maybe<Scalars["Int"]>
		/**
		 * Filter by user id
		 */
		userId?: Maybe<Scalars["Int"]>
		/**
		 * Filter by media type
		 */
		mediaType?: Maybe<MediaType>
		/**
		 * The order the results will be returned in
		 */
		sort?: Maybe<Array<Maybe<ReviewSort>>>
	}) => Maybe<Review>
	/**
	 * Activity query
	 */
	Activity: (args?: {
		/**
		 * Filter by the activity id
		 */
		id?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the owner user id
		 */
		userId?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the id of the user who sent a message
		 */
		messengerId?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the associated media id of the activity
		 */
		mediaId?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the type of activity
		 */
		type?: Maybe<ActivityType>
		/**
		 * Filter activity to users who are being followed by the authenticated user
		 */
		isFollowing?: Maybe<Scalars["Boolean"]>
		/**
		 * Filter activity to only activity with replies
		 */
		hasReplies?: Maybe<Scalars["Boolean"]>
		/**
		 * Filter activity to only activity with replies or is of type text
		 */
		hasRepliesOrTypeText?: Maybe<Scalars["Boolean"]>
		/**
		 * Filter by the time the activity was created
		 */
		createdAt?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the activity id
		 */
		id_not?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the activity id
		 */
		id_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
		/**
		 * Filter by the activity id
		 */
		id_not_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
		/**
		 * Filter by the owner user id
		 */
		userId_not?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the owner user id
		 */
		userId_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
		/**
		 * Filter by the owner user id
		 */
		userId_not_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
		/**
		 * Filter by the id of the user who sent a message
		 */
		messengerId_not?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the id of the user who sent a message
		 */
		messengerId_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
		/**
		 * Filter by the id of the user who sent a message
		 */
		messengerId_not_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
		/**
		 * Filter by the associated media id of the activity
		 */
		mediaId_not?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the associated media id of the activity
		 */
		mediaId_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
		/**
		 * Filter by the associated media id of the activity
		 */
		mediaId_not_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
		/**
		 * Filter by the type of activity
		 */
		type_not?: Maybe<ActivityType>
		/**
		 * Filter by the type of activity
		 */
		type_in?: Maybe<Array<Maybe<ActivityType>>>
		/**
		 * Filter by the type of activity
		 */
		type_not_in?: Maybe<Array<Maybe<ActivityType>>>
		/**
		 * Filter by the time the activity was created
		 */
		createdAt_greater?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the time the activity was created
		 */
		createdAt_lesser?: Maybe<Scalars["Int"]>
		/**
		 * The order the results will be returned in
		 */
		sort?: Maybe<Array<Maybe<ActivitySort>>>
	}) => Maybe<ActivityUnion>
	/**
	 * Activity reply query
	 */
	ActivityReply: (args?: {
		/**
		 * Filter by the reply id
		 */
		id?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the parent id
		 */
		activityId?: Maybe<Scalars["Int"]>
	}) => Maybe<ActivityReply>
	/**
	 * Follow query
	 */
	Following: (args: {
		/**
		 * User id of the follower/followed
		 */
		userId: Scalars["Int"]
		/**
		 * The order the results will be returned in
		 */
		sort?: Maybe<Array<Maybe<UserSort>>>
	}) => Maybe<User>
	/**
	 * Follow query
	 */
	Follower: (args: {
		/**
		 * User id of the follower/followed
		 */
		userId: Scalars["Int"]
		/**
		 * The order the results will be returned in
		 */
		sort?: Maybe<Array<Maybe<UserSort>>>
	}) => Maybe<User>
	/**
	 * Thread query
	 */
	Thread: (args?: {
		/**
		 * Filter by the thread id
		 */
		id?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the user id of the thread's creator
		 */
		userId?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the user id of the last user to comment on the thread
		 */
		replyUserId?: Maybe<Scalars["Int"]>
		/**
		 * Filter by if the currently authenticated user's subscribed threads
		 */
		subscribed?: Maybe<Scalars["Boolean"]>
		/**
		 * Filter by thread category id
		 */
		categoryId?: Maybe<Scalars["Int"]>
		/**
		 * Filter by thread media id category
		 */
		mediaCategoryId?: Maybe<Scalars["Int"]>
		/**
		 * Filter by search query
		 */
		search?: Maybe<Scalars["String"]>
		/**
		 * Filter by the thread id
		 */
		id_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
		/**
		 * The order the results will be returned in
		 */
		sort?: Maybe<Array<Maybe<ThreadSort>>>
	}) => Maybe<Thread>
	/**
	 * Comment query
	 */
	ThreadComment: (args?: {
		/**
		 * Filter by the comment id
		 */
		id?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the thread id
		 */
		threadId?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the user id of the comment's creator
		 */
		userId?: Maybe<Scalars["Int"]>
		/**
		 * The order the results will be returned in
		 */
		sort?: Maybe<Array<Maybe<ThreadCommentSort>>>
	}) => Maybe<Array<Maybe<ThreadComment>>>
	/**
	 * Recommendation query
	 */
	Recommendation: (args?: {
		/**
		 * Filter by recommendation id
		 */
		id?: Maybe<Scalars["Int"]>
		/**
		 * Filter by media id
		 */
		mediaId?: Maybe<Scalars["Int"]>
		/**
		 * Filter by media recommendation id
		 */
		mediaRecommendationId?: Maybe<Scalars["Int"]>
		/**
		 * Filter by user who created the recommendation
		 */
		userId?: Maybe<Scalars["Int"]>
		/**
		 * Filter by total rating of the recommendation
		 */
		rating?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the media on the authenticated user's lists
		 */
		onList?: Maybe<Scalars["Boolean"]>
		/**
		 * Filter by total rating of the recommendation
		 */
		rating_greater?: Maybe<Scalars["Int"]>
		/**
		 * Filter by total rating of the recommendation
		 */
		rating_lesser?: Maybe<Scalars["Int"]>
		/**
		 * The order the results will be returned in
		 */
		sort?: Maybe<Array<Maybe<RecommendationSort>>>
	}) => Maybe<Recommendation>
	/**
	 * Like query
	 */
	Like: (args?: {
		/**
		 * The id of the likeable type
		 */
		likeableId?: Maybe<Scalars["Int"]>
		/**
		 * The type of model the id applies to
		 */
		type?: Maybe<LikeableType>
	}) => Maybe<User>
	/**
	 * Provide AniList markdown to be converted to html (Requires auth)
	 */
	Markdown: (args: {
		/**
		 * The markdown to be parsed to html
		 */
		markdown: Scalars["String"]
	}) => Maybe<ParsedMarkdown>
	AniChartUser?: Maybe<AniChartUser>
	/**
	 * Site statistics query
	 */
	SiteStatistics?: Maybe<SiteStatistics>
}

export interface Mutation {
	__typename: "Mutation" | undefined
	UpdateUser: (args?: {
		/**
		 * User's about/bio text
		 */
		about?: Maybe<Scalars["String"]>
		/**
		 * User's title language
		 */
		titleLanguage?: Maybe<UserTitleLanguage>
		/**
		 * If the user should see media marked as adult-only
		 */
		displayAdultContent?: Maybe<Scalars["Boolean"]>
		/**
		 * If the user should get notifications when a show they are watching aires
		 */
		airingNotifications?: Maybe<Scalars["Boolean"]>
		/**
		 * The user's list scoring system
		 */
		scoreFormat?: Maybe<ScoreFormat>
		/**
		 * The user's default list order
		 */
		rowOrder?: Maybe<Scalars["String"]>
		/**
		 * Profile highlight color
		 */
		profileColor?: Maybe<Scalars["String"]>
		/**
		 * Profile highlight color
		 */
		donatorBadge?: Maybe<Scalars["String"]>
		/**
		 * Notification options
		 */
		notificationOptions?: Maybe<Array<Maybe<NotificationOptionInput>>>
		/**
		 * Timezone offset format: -?HH:MM
		 */
		timezone?: Maybe<Scalars["String"]>
		/**
		 * Minutes between activity for them to be merged together. 0 is Never, Above 2 weeks (20160 mins) is Always.
		 */
		activityMergeTime?: Maybe<Scalars["Int"]>
		/**
		 * The user's anime list options
		 */
		animeListOptions?: Maybe<MediaListOptionsInput>
		/**
		 * The user's anime list options
		 */
		mangaListOptions?: Maybe<MediaListOptionsInput>
	}) => Maybe<User>
	/**
	 * Create or update a media list entry
	 */
	SaveMediaListEntry: (args?: {
		/**
		 * The list entry id, required for updating
		 */
		id?: Maybe<Scalars["Int"]>
		/**
		 * The id of the media the entry is of
		 */
		mediaId?: Maybe<Scalars["Int"]>
		/**
		 * The watching/reading status
		 */
		status?: Maybe<MediaListStatus>
		/**
		 * The score of the media in the user's chosen scoring method
		 */
		score?: Maybe<Scalars["Float"]>
		/**
		 * The score of the media in 100 point
		 */
		scoreRaw?: Maybe<Scalars["Int"]>
		/**
		 * The amount of episodes/chapters consumed by the user
		 */
		progress?: Maybe<Scalars["Int"]>
		/**
		 * The amount of volumes read by the user
		 */
		progressVolumes?: Maybe<Scalars["Int"]>
		/**
		 * The amount of times the user has rewatched/read the media
		 */
		repeat?: Maybe<Scalars["Int"]>
		/**
		 * Priority of planning
		 */
		priority?: Maybe<Scalars["Int"]>
		/**
		 * If the entry should only be visible to authenticated user
		 */
		private?: Maybe<Scalars["Boolean"]>
		/**
		 * Text notes
		 */
		notes?: Maybe<Scalars["String"]>
		/**
		 * If the entry shown be hidden from non-custom lists
		 */
		hiddenFromStatusLists?: Maybe<Scalars["Boolean"]>
		/**
		 * Array of custom list names which should be enabled for this entry
		 */
		customLists?: Maybe<Array<Maybe<Scalars["String"]>>>
		/**
		 * Array of advanced scores
		 */
		advancedScores?: Maybe<Array<Maybe<Scalars["Float"]>>>
		/**
		 * When the entry was started by the user
		 */
		startedAt?: Maybe<FuzzyDateInput>
		/**
		 * When the entry was completed by the user
		 */
		completedAt?: Maybe<FuzzyDateInput>
	}) => Maybe<MediaList>
	/**
	 * Update multiple media list entries to the same values
	 */
	UpdateMediaListEntries: (args?: {
		/**
		 * The watching/reading status
		 */
		status?: Maybe<MediaListStatus>
		/**
		 * The score of the media in the user's chosen scoring method
		 */
		score?: Maybe<Scalars["Float"]>
		/**
		 * The score of the media in 100 point
		 */
		scoreRaw?: Maybe<Scalars["Int"]>
		/**
		 * The amount of episodes/chapters consumed by the user
		 */
		progress?: Maybe<Scalars["Int"]>
		/**
		 * The amount of volumes read by the user
		 */
		progressVolumes?: Maybe<Scalars["Int"]>
		/**
		 * The amount of times the user has rewatched/read the media
		 */
		repeat?: Maybe<Scalars["Int"]>
		/**
		 * Priority of planning
		 */
		priority?: Maybe<Scalars["Int"]>
		/**
		 * If the entry should only be visible to authenticated user
		 */
		private?: Maybe<Scalars["Boolean"]>
		/**
		 * Text notes
		 */
		notes?: Maybe<Scalars["String"]>
		/**
		 * If the entry shown be hidden from non-custom lists
		 */
		hiddenFromStatusLists?: Maybe<Scalars["Boolean"]>
		/**
		 * Array of advanced scores
		 */
		advancedScores?: Maybe<Array<Maybe<Scalars["Float"]>>>
		/**
		 * When the entry was started by the user
		 */
		startedAt?: Maybe<FuzzyDateInput>
		/**
		 * When the entry was completed by the user
		 */
		completedAt?: Maybe<FuzzyDateInput>
		/**
		 * The list entries ids to update
		 */
		ids?: Maybe<Array<Maybe<Scalars["Int"]>>>
	}) => Maybe<Array<Maybe<MediaList>>>
	/**
	 * Delete a media list entry
	 */
	DeleteMediaListEntry: (args?: {
		/**
		 * The id of the media list entry to delete
		 */
		id?: Maybe<Scalars["Int"]>
	}) => Maybe<Deleted>
	/**
	 * Delete a custom list and remove the list entries from it
	 */
	DeleteCustomList: (args?: {
		/**
		 * The name of the custom list to delete
		 */
		customList?: Maybe<Scalars["String"]>
		/**
		 * The media list type of the custom list
		 */
		type?: Maybe<MediaType>
	}) => Maybe<Deleted>
	/**
	 * Create or update text activity for the currently authenticated user
	 */
	SaveTextActivity: (args?: {
		/**
		 * The activity's id, required for updating
		 */
		id?: Maybe<Scalars["Int"]>
		/**
		 * The activity text
		 */
		text?: Maybe<Scalars["String"]>
		/**
		 * If the activity should be locked. (Mod Only)
		 */
		locked?: Maybe<Scalars["Boolean"]>
	}) => Maybe<TextActivity>
	/**
	 * Create or update message activity for the currently authenticated user
	 */
	SaveMessageActivity: (args?: {
		/**
		 * The activity id, required for updating
		 */
		id?: Maybe<Scalars["Int"]>
		/**
		 * The activity message text
		 */
		message?: Maybe<Scalars["String"]>
		/**
		 * The id of the user the message is being sent to
		 */
		recipientId?: Maybe<Scalars["Int"]>
		/**
		 * If the activity should be private
		 */
		private?: Maybe<Scalars["Boolean"]>
		/**
		 * If the activity should be locked. (Mod Only)
		 */
		locked?: Maybe<Scalars["Boolean"]>
		/**
		 * If the message should be sent from the Moderator account (Mod Only)
		 */
		asMod?: Maybe<Scalars["Boolean"]>
	}) => Maybe<MessageActivity>
	/**
	 * Update list activity (Mod Only)
	 */
	SaveListActivity: (args?: {
		/**
		 * The activity's id, required for updating
		 */
		id?: Maybe<Scalars["Int"]>
		/**
		 * If the activity should be locked. (Mod Only)
		 */
		locked?: Maybe<Scalars["Boolean"]>
	}) => Maybe<ListActivity>
	/**
	 * Delete an activity item of the authenticated users
	 */
	DeleteActivity: (args?: {
		/**
		 * The id of the activity to delete
		 */
		id?: Maybe<Scalars["Int"]>
	}) => Maybe<Deleted>
	/**
	 * Toggle the subscription of an activity item
	 */
	ToggleActivitySubscription: (args?: {
		/**
		 * The id of the activity to un/subscribe
		 */
		activityId?: Maybe<Scalars["Int"]>
		/**
		 * Whether to subscribe or unsubscribe from the activity
		 */
		subscribe?: Maybe<Scalars["Boolean"]>
	}) => Maybe<ActivityUnion>
	/**
	 * Create or update an activity reply
	 */
	SaveActivityReply: (args?: {
		/**
		 * The activity reply id, required for updating
		 */
		id?: Maybe<Scalars["Int"]>
		/**
		 * The id of the parent activity being replied to
		 */
		activityId?: Maybe<Scalars["Int"]>
		/**
		 * The reply text
		 */
		text?: Maybe<Scalars["String"]>
		/**
		 * If the reply should be sent from the Moderator account (Mod Only)
		 */
		asMod?: Maybe<Scalars["Boolean"]>
	}) => Maybe<ActivityReply>
	/**
	 * Delete an activity reply of the authenticated users
	 */
	DeleteActivityReply: (args?: {
		/**
		 * The id of the reply to delete
		 */
		id?: Maybe<Scalars["Int"]>
	}) => Maybe<Deleted>
	/**
	 * Add or remove a like from a likeable type.
	 *                           Returns all the users who liked the same model
	 */
	ToggleLike: (args?: {
		/**
		 * The id of the likeable type
		 */
		id?: Maybe<Scalars["Int"]>
		/**
		 * The type of model to be un/liked
		 */
		type?: Maybe<LikeableType>
	}) => Maybe<Array<Maybe<User>>>
	/**
	 * Add or remove a like from a likeable type.
	 */
	ToggleLikeV2: (args?: {
		/**
		 * The id of the likeable type
		 */
		id?: Maybe<Scalars["Int"]>
		/**
		 * The type of model to be un/liked
		 */
		type?: Maybe<LikeableType>
	}) => Maybe<LikeableUnion>
	/**
	 * Toggle the un/following of a user
	 */
	ToggleFollow: (args?: {
		/**
		 * The id of the user to un/follow
		 */
		userId?: Maybe<Scalars["Int"]>
	}) => Maybe<User>
	/**
	 * Favourite or unfavourite an anime, manga, character, staff member, or studio
	 */
	ToggleFavourite: (args?: {
		/**
		 * The id of the anime to un/favourite
		 */
		animeId?: Maybe<Scalars["Int"]>
		/**
		 * The id of the manga to un/favourite
		 */
		mangaId?: Maybe<Scalars["Int"]>
		/**
		 * The id of the character to un/favourite
		 */
		characterId?: Maybe<Scalars["Int"]>
		/**
		 * The id of the staff to un/favourite
		 */
		staffId?: Maybe<Scalars["Int"]>
		/**
		 * The id of the studio to un/favourite
		 */
		studioId?: Maybe<Scalars["Int"]>
	}) => Maybe<Favourites>
	/**
	 * Update the order favourites are displayed in
	 */
	UpdateFavouriteOrder: (args?: {
		/**
		 * The id of the anime to un/favourite
		 */
		animeIds?: Maybe<Array<Maybe<Scalars["Int"]>>>
		/**
		 * The id of the manga to un/favourite
		 */
		mangaIds?: Maybe<Array<Maybe<Scalars["Int"]>>>
		/**
		 * The id of the character to un/favourite
		 */
		characterIds?: Maybe<Array<Maybe<Scalars["Int"]>>>
		/**
		 * The id of the staff to un/favourite
		 */
		staffIds?: Maybe<Array<Maybe<Scalars["Int"]>>>
		/**
		 * The id of the studio to un/favourite
		 */
		studioIds?: Maybe<Array<Maybe<Scalars["Int"]>>>
		/**
		 * List of integers which the anime should be ordered by (Asc)
		 */
		animeOrder?: Maybe<Array<Maybe<Scalars["Int"]>>>
		/**
		 * List of integers which the manga should be ordered by (Asc)
		 */
		mangaOrder?: Maybe<Array<Maybe<Scalars["Int"]>>>
		/**
		 * List of integers which the character should be ordered by (Asc)
		 */
		characterOrder?: Maybe<Array<Maybe<Scalars["Int"]>>>
		/**
		 * List of integers which the staff should be ordered by (Asc)
		 */
		staffOrder?: Maybe<Array<Maybe<Scalars["Int"]>>>
		/**
		 * List of integers which the studio should be ordered by (Asc)
		 */
		studioOrder?: Maybe<Array<Maybe<Scalars["Int"]>>>
	}) => Maybe<Favourites>
	/**
	 * Create or update a review
	 */
	SaveReview: (args?: {
		/**
		 * The review id, required for updating
		 */
		id?: Maybe<Scalars["Int"]>
		/**
		 * The id of the media the review is of
		 */
		mediaId?: Maybe<Scalars["Int"]>
		/**
		 * The main review text. Min:2200 characters
		 */
		body?: Maybe<Scalars["String"]>
		/**
		 * A short summary/preview of the review. Min:20, Max:120 characters
		 */
		summary?: Maybe<Scalars["String"]>
		/**
		 * A short summary/preview of the review. Min:20, Max:120 characters
		 */
		score?: Maybe<Scalars["Int"]>
		/**
		 * If the review should only be visible to its creator
		 */
		private?: Maybe<Scalars["Boolean"]>
	}) => Maybe<Review>
	/**
	 * Delete a review
	 */
	DeleteReview: (args?: {
		/**
		 * The id of the review to delete
		 */
		id?: Maybe<Scalars["Int"]>
	}) => Maybe<Deleted>
	/**
	 * Rate a review
	 */
	RateReview: (args?: {
		/**
		 * The id of the review to rate
		 */
		reviewId?: Maybe<Scalars["Int"]>
		/**
		 * The rating to apply to the review
		 */
		rating?: Maybe<ReviewRating>
	}) => Maybe<Review>
	/**
	 * Recommendation a media
	 */
	SaveRecommendation: (args?: {
		/**
		 * The id of the base media
		 */
		mediaId?: Maybe<Scalars["Int"]>
		/**
		 * The id of the media to recommend
		 */
		mediaRecommendationId?: Maybe<Scalars["Int"]>
		/**
		 * The rating to give the recommendation
		 */
		rating?: Maybe<RecommendationRating>
	}) => Maybe<Recommendation>
	/**
	 * Create or update a forum thread
	 */
	SaveThread: (args?: {
		/**
		 * The thread id, required for updating
		 */
		id?: Maybe<Scalars["Int"]>
		/**
		 * The title of the thread
		 */
		title?: Maybe<Scalars["String"]>
		/**
		 * The main text body of the thread
		 */
		body?: Maybe<Scalars["String"]>
		/**
		 * Forum categories the thread should be within
		 */
		categories?: Maybe<Array<Maybe<Scalars["Int"]>>>
		/**
		 * Media related to the contents of the thread
		 */
		mediaCategories?: Maybe<Array<Maybe<Scalars["Int"]>>>
		/**
		 * If the thread should be stickied. (Mod Only)
		 */
		sticky?: Maybe<Scalars["Boolean"]>
		/**
		 * If the thread should be locked. (Mod Only)
		 */
		locked?: Maybe<Scalars["Boolean"]>
	}) => Maybe<Thread>
	/**
	 * Delete a thread
	 */
	DeleteThread: (args?: {
		/**
		 * The id of the thread to delete
		 */
		id?: Maybe<Scalars["Int"]>
	}) => Maybe<Deleted>
	/**
	 * Toggle the subscription of a forum thread
	 */
	ToggleThreadSubscription: (args?: {
		/**
		 * The id of the forum thread to un/subscribe
		 */
		threadId?: Maybe<Scalars["Int"]>
		/**
		 * Whether to subscribe or unsubscribe from the forum thread
		 */
		subscribe?: Maybe<Scalars["Boolean"]>
	}) => Maybe<Thread>
	/**
	 * Create or update a thread comment
	 */
	SaveThreadComment: (args?: {
		/**
		 * The comment id, required for updating
		 */
		id?: Maybe<Scalars["Int"]>
		/**
		 * The id of thread the comment belongs to
		 */
		threadId?: Maybe<Scalars["Int"]>
		/**
		 * The id of thread comment to reply to
		 */
		parentCommentId?: Maybe<Scalars["Int"]>
		/**
		 * The comment markdown text
		 */
		comment?: Maybe<Scalars["String"]>
	}) => Maybe<ThreadComment>
	/**
	 * Delete a thread comment
	 */
	DeleteThreadComment: (args?: {
		/**
		 * The id of the thread comment to delete
		 */
		id?: Maybe<Scalars["Int"]>
	}) => Maybe<Deleted>
	UpdateAniChartSettings: (args?: {
		titleLanguage?: Maybe<Scalars["String"]>
		outgoingLinkProvider?: Maybe<Scalars["String"]>
		theme?: Maybe<Scalars["String"]>
		sort?: Maybe<Scalars["String"]>
	}) => Maybe<ScalarsEnums["Json"]>
	UpdateAniChartHighlights: (args?: {
		highlights?: Maybe<Array<Maybe<AniChartHighlightInput>>>
	}) => Maybe<ScalarsEnums["Json"]>
}

export interface Subscription {
	__typename: "Subscription" | undefined
}

/**
 * Page of data
 */
export interface Page {
	__typename: "Page" | undefined
	/**
	 * The pagination information
	 */
	pageInfo?: Maybe<PageInfo>
	users: (args?: {
		/**
		 * Filter by the user id
		 */
		id?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the name of the user
		 */
		name?: Maybe<Scalars["String"]>
		/**
		 * Filter by search query
		 */
		search?: Maybe<Scalars["String"]>
		/**
		 * The order the results will be returned in
		 */
		sort?: Maybe<Array<Maybe<UserSort>>>
	}) => Maybe<Array<Maybe<User>>>
	media: (args?: {
		/**
		 * Filter by the media id
		 */
		id?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the media's MyAnimeList id
		 */
		idMal?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the start date of the media
		 */
		startDate?: Maybe<Scalars["FuzzyDateInt"]>
		/**
		 * Filter by the end date of the media
		 */
		endDate?: Maybe<Scalars["FuzzyDateInt"]>
		/**
		 * Filter by the season the media was released in
		 */
		season?: Maybe<MediaSeason>
		/**
		 * The year of the season (Winter 2017 would also include December 2016 releases). Requires season argument
		 */
		seasonYear?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the media's type
		 */
		type?: Maybe<MediaType>
		/**
		 * Filter by the media's format
		 */
		format?: Maybe<MediaFormat>
		/**
		 * Filter by the media's current release status
		 */
		status?: Maybe<MediaStatus>
		/**
		 * Filter by amount of episodes the media has
		 */
		episodes?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the media's episode length
		 */
		duration?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the media's chapter count
		 */
		chapters?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the media's volume count
		 */
		volumes?: Maybe<Scalars["Int"]>
		/**
		 * Filter by if the media's intended for 18+ adult audiences
		 */
		isAdult?: Maybe<Scalars["Boolean"]>
		/**
		 * Filter by the media's genres
		 */
		genre?: Maybe<Scalars["String"]>
		/**
		 * Filter by the media's tags
		 */
		tag?: Maybe<Scalars["String"]>
		/**
		 * Only apply the tags filter argument to tags above this rank. Default: 18
		 */
		minimumTagRank?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the media's tags with in a tag category
		 */
		tagCategory?: Maybe<Scalars["String"]>
		/**
		 * Filter by the media on the authenticated user's lists
		 */
		onList?: Maybe<Scalars["Boolean"]>
		/**
		 * Filter media by sites with a online streaming or reading license
		 */
		licensedBy?: Maybe<Scalars["String"]>
		/**
		 * Filter by the media's average score
		 */
		averageScore?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the number of users with this media on their list
		 */
		popularity?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the source type of the media
		 */
		source?: Maybe<MediaSource>
		/**
		 * Filter by the media's country of origin
		 */
		countryOfOrigin?: Maybe<Scalars["CountryCode"]>
		/**
		 * Filter by search query
		 */
		search?: Maybe<Scalars["String"]>
		/**
		 * Filter by the media id
		 */
		id_not?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the media id
		 */
		id_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
		/**
		 * Filter by the media id
		 */
		id_not_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
		/**
		 * Filter by the media's MyAnimeList id
		 */
		idMal_not?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the media's MyAnimeList id
		 */
		idMal_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
		/**
		 * Filter by the media's MyAnimeList id
		 */
		idMal_not_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
		/**
		 * Filter by the start date of the media
		 */
		startDate_greater?: Maybe<Scalars["FuzzyDateInt"]>
		/**
		 * Filter by the start date of the media
		 */
		startDate_lesser?: Maybe<Scalars["FuzzyDateInt"]>
		/**
		 * Filter by the start date of the media
		 */
		startDate_like?: Maybe<Scalars["String"]>
		/**
		 * Filter by the end date of the media
		 */
		endDate_greater?: Maybe<Scalars["FuzzyDateInt"]>
		/**
		 * Filter by the end date of the media
		 */
		endDate_lesser?: Maybe<Scalars["FuzzyDateInt"]>
		/**
		 * Filter by the end date of the media
		 */
		endDate_like?: Maybe<Scalars["String"]>
		/**
		 * Filter by the media's format
		 */
		format_in?: Maybe<Array<Maybe<MediaFormat>>>
		/**
		 * Filter by the media's format
		 */
		format_not?: Maybe<MediaFormat>
		/**
		 * Filter by the media's format
		 */
		format_not_in?: Maybe<Array<Maybe<MediaFormat>>>
		/**
		 * Filter by the media's current release status
		 */
		status_in?: Maybe<Array<Maybe<MediaStatus>>>
		/**
		 * Filter by the media's current release status
		 */
		status_not?: Maybe<MediaStatus>
		/**
		 * Filter by the media's current release status
		 */
		status_not_in?: Maybe<Array<Maybe<MediaStatus>>>
		/**
		 * Filter by amount of episodes the media has
		 */
		episodes_greater?: Maybe<Scalars["Int"]>
		/**
		 * Filter by amount of episodes the media has
		 */
		episodes_lesser?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the media's episode length
		 */
		duration_greater?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the media's episode length
		 */
		duration_lesser?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the media's chapter count
		 */
		chapters_greater?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the media's chapter count
		 */
		chapters_lesser?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the media's volume count
		 */
		volumes_greater?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the media's volume count
		 */
		volumes_lesser?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the media's genres
		 */
		genre_in?: Maybe<Array<Maybe<Scalars["String"]>>>
		/**
		 * Filter by the media's genres
		 */
		genre_not_in?: Maybe<Array<Maybe<Scalars["String"]>>>
		/**
		 * Filter by the media's tags
		 */
		tag_in?: Maybe<Array<Maybe<Scalars["String"]>>>
		/**
		 * Filter by the media's tags
		 */
		tag_not_in?: Maybe<Array<Maybe<Scalars["String"]>>>
		/**
		 * Filter by the media's tags with in a tag category
		 */
		tagCategory_in?: Maybe<Array<Maybe<Scalars["String"]>>>
		/**
		 * Filter by the media's tags with in a tag category
		 */
		tagCategory_not_in?: Maybe<Array<Maybe<Scalars["String"]>>>
		/**
		 * Filter media by sites with a online streaming or reading license
		 */
		licensedBy_in?: Maybe<Array<Maybe<Scalars["String"]>>>
		/**
		 * Filter by the media's average score
		 */
		averageScore_not?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the media's average score
		 */
		averageScore_greater?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the media's average score
		 */
		averageScore_lesser?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the number of users with this media on their list
		 */
		popularity_not?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the number of users with this media on their list
		 */
		popularity_greater?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the number of users with this media on their list
		 */
		popularity_lesser?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the source type of the media
		 */
		source_in?: Maybe<Array<Maybe<MediaSource>>>
		/**
		 * The order the results will be returned in
		 */
		sort?: Maybe<Array<Maybe<MediaSort>>>
	}) => Maybe<Array<Maybe<Media>>>
	characters: (args?: {
		/**
		 * Filter by character id
		 */
		id?: Maybe<Scalars["Int"]>
		/**
		 * Filter by character by if its their birthday today
		 */
		isBirthday?: Maybe<Scalars["Boolean"]>
		/**
		 * Filter by search query
		 */
		search?: Maybe<Scalars["String"]>
		/**
		 * Filter by character id
		 */
		id_not?: Maybe<Scalars["Int"]>
		/**
		 * Filter by character id
		 */
		id_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
		/**
		 * Filter by character id
		 */
		id_not_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
		/**
		 * The order the results will be returned in
		 */
		sort?: Maybe<Array<Maybe<CharacterSort>>>
	}) => Maybe<Array<Maybe<Character>>>
	staff: (args?: {
		/**
		 * Filter by the staff id
		 */
		id?: Maybe<Scalars["Int"]>
		/**
		 * Filter by staff by if its their birthday today
		 */
		isBirthday?: Maybe<Scalars["Boolean"]>
		/**
		 * Filter by search query
		 */
		search?: Maybe<Scalars["String"]>
		/**
		 * Filter by the staff id
		 */
		id_not?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the staff id
		 */
		id_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
		/**
		 * Filter by the staff id
		 */
		id_not_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
		/**
		 * The order the results will be returned in
		 */
		sort?: Maybe<Array<Maybe<StaffSort>>>
	}) => Maybe<Array<Maybe<Staff>>>
	studios: (args?: {
		/**
		 * Filter by the studio id
		 */
		id?: Maybe<Scalars["Int"]>
		/**
		 * Filter by search query
		 */
		search?: Maybe<Scalars["String"]>
		/**
		 * Filter by the studio id
		 */
		id_not?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the studio id
		 */
		id_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
		/**
		 * Filter by the studio id
		 */
		id_not_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
		/**
		 * The order the results will be returned in
		 */
		sort?: Maybe<Array<Maybe<StudioSort>>>
	}) => Maybe<Array<Maybe<Studio>>>
	mediaList: (args?: {
		/**
		 * Filter by a list entry's id
		 */
		id?: Maybe<Scalars["Int"]>
		/**
		 * Filter by a user's id
		 */
		userId?: Maybe<Scalars["Int"]>
		/**
		 * Filter by a user's name
		 */
		userName?: Maybe<Scalars["String"]>
		/**
		 * Filter by the list entries media type
		 */
		type?: Maybe<MediaType>
		/**
		 * Filter by the watching/reading status
		 */
		status?: Maybe<MediaListStatus>
		/**
		 * Filter by the media id of the list entry
		 */
		mediaId?: Maybe<Scalars["Int"]>
		/**
		 * Filter list entries to users who are being followed by the authenticated user
		 */
		isFollowing?: Maybe<Scalars["Boolean"]>
		/**
		 * Filter by note words and #tags
		 */
		notes?: Maybe<Scalars["String"]>
		/**
		 * Filter by the date the user started the media
		 */
		startedAt?: Maybe<Scalars["FuzzyDateInt"]>
		/**
		 * Filter by the date the user completed the media
		 */
		completedAt?: Maybe<Scalars["FuzzyDateInt"]>
		/**
		 * Limit to only entries also on the auth user's list. Requires user id or name arguments.
		 */
		compareWithAuthList?: Maybe<Scalars["Boolean"]>
		/**
		 * Filter by a user's id
		 */
		userId_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
		/**
		 * Filter by the watching/reading status
		 */
		status_in?: Maybe<Array<Maybe<MediaListStatus>>>
		/**
		 * Filter by the watching/reading status
		 */
		status_not_in?: Maybe<Array<Maybe<MediaListStatus>>>
		/**
		 * Filter by the watching/reading status
		 */
		status_not?: Maybe<MediaListStatus>
		/**
		 * Filter by the media id of the list entry
		 */
		mediaId_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
		/**
		 * Filter by the media id of the list entry
		 */
		mediaId_not_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
		/**
		 * Filter by note words and #tags
		 */
		notes_like?: Maybe<Scalars["String"]>
		/**
		 * Filter by the date the user started the media
		 */
		startedAt_greater?: Maybe<Scalars["FuzzyDateInt"]>
		/**
		 * Filter by the date the user started the media
		 */
		startedAt_lesser?: Maybe<Scalars["FuzzyDateInt"]>
		/**
		 * Filter by the date the user started the media
		 */
		startedAt_like?: Maybe<Scalars["String"]>
		/**
		 * Filter by the date the user completed the media
		 */
		completedAt_greater?: Maybe<Scalars["FuzzyDateInt"]>
		/**
		 * Filter by the date the user completed the media
		 */
		completedAt_lesser?: Maybe<Scalars["FuzzyDateInt"]>
		/**
		 * Filter by the date the user completed the media
		 */
		completedAt_like?: Maybe<Scalars["String"]>
		/**
		 * The order the results will be returned in
		 */
		sort?: Maybe<Array<Maybe<MediaListSort>>>
	}) => Maybe<Array<Maybe<MediaList>>>
	airingSchedules: (args?: {
		/**
		 * Filter by the id of the airing schedule item
		 */
		id?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the id of associated media
		 */
		mediaId?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the airing episode number
		 */
		episode?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the time of airing
		 */
		airingAt?: Maybe<Scalars["Int"]>
		/**
		 * Filter to episodes that haven't yet aired
		 */
		notYetAired?: Maybe<Scalars["Boolean"]>
		/**
		 * Filter by the id of the airing schedule item
		 */
		id_not?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the id of the airing schedule item
		 */
		id_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
		/**
		 * Filter by the id of the airing schedule item
		 */
		id_not_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
		/**
		 * Filter by the id of associated media
		 */
		mediaId_not?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the id of associated media
		 */
		mediaId_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
		/**
		 * Filter by the id of associated media
		 */
		mediaId_not_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
		/**
		 * Filter by the airing episode number
		 */
		episode_not?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the airing episode number
		 */
		episode_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
		/**
		 * Filter by the airing episode number
		 */
		episode_not_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
		/**
		 * Filter by the airing episode number
		 */
		episode_greater?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the airing episode number
		 */
		episode_lesser?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the time of airing
		 */
		airingAt_greater?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the time of airing
		 */
		airingAt_lesser?: Maybe<Scalars["Int"]>
		/**
		 * The order the results will be returned in
		 */
		sort?: Maybe<Array<Maybe<AiringSort>>>
	}) => Maybe<Array<Maybe<AiringSchedule>>>
	mediaTrends: (args?: {
		/**
		 * Filter by the media id
		 */
		mediaId?: Maybe<Scalars["Int"]>
		/**
		 * Filter by date
		 */
		date?: Maybe<Scalars["Int"]>
		/**
		 * Filter by trending amount
		 */
		trending?: Maybe<Scalars["Int"]>
		/**
		 * Filter by score
		 */
		averageScore?: Maybe<Scalars["Int"]>
		/**
		 * Filter by popularity
		 */
		popularity?: Maybe<Scalars["Int"]>
		/**
		 * Filter by episode number
		 */
		episode?: Maybe<Scalars["Int"]>
		/**
		 * Filter to stats recorded while the media was releasing
		 */
		releasing?: Maybe<Scalars["Boolean"]>
		/**
		 * Filter by the media id
		 */
		mediaId_not?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the media id
		 */
		mediaId_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
		/**
		 * Filter by the media id
		 */
		mediaId_not_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
		/**
		 * Filter by date
		 */
		date_greater?: Maybe<Scalars["Int"]>
		/**
		 * Filter by date
		 */
		date_lesser?: Maybe<Scalars["Int"]>
		/**
		 * Filter by trending amount
		 */
		trending_greater?: Maybe<Scalars["Int"]>
		/**
		 * Filter by trending amount
		 */
		trending_lesser?: Maybe<Scalars["Int"]>
		/**
		 * Filter by trending amount
		 */
		trending_not?: Maybe<Scalars["Int"]>
		/**
		 * Filter by score
		 */
		averageScore_greater?: Maybe<Scalars["Int"]>
		/**
		 * Filter by score
		 */
		averageScore_lesser?: Maybe<Scalars["Int"]>
		/**
		 * Filter by score
		 */
		averageScore_not?: Maybe<Scalars["Int"]>
		/**
		 * Filter by popularity
		 */
		popularity_greater?: Maybe<Scalars["Int"]>
		/**
		 * Filter by popularity
		 */
		popularity_lesser?: Maybe<Scalars["Int"]>
		/**
		 * Filter by popularity
		 */
		popularity_not?: Maybe<Scalars["Int"]>
		/**
		 * Filter by episode number
		 */
		episode_greater?: Maybe<Scalars["Int"]>
		/**
		 * Filter by episode number
		 */
		episode_lesser?: Maybe<Scalars["Int"]>
		/**
		 * Filter by episode number
		 */
		episode_not?: Maybe<Scalars["Int"]>
		/**
		 * The order the results will be returned in
		 */
		sort?: Maybe<Array<Maybe<MediaTrendSort>>>
	}) => Maybe<Array<Maybe<MediaTrend>>>
	notifications: (args?: {
		/**
		 * Filter by the type of notifications
		 */
		type?: Maybe<NotificationType>
		/**
		 * Reset the unread notification count to 0 on load
		 */
		resetNotificationCount?: Maybe<Scalars["Boolean"]>
		/**
		 * Filter by the type of notifications
		 */
		type_in?: Maybe<Array<Maybe<NotificationType>>>
	}) => Maybe<Array<Maybe<NotificationUnion>>>
	followers: (args: {
		/**
		 * User id of the follower/followed
		 */
		userId: Scalars["Int"]
		/**
		 * The order the results will be returned in
		 */
		sort?: Maybe<Array<Maybe<UserSort>>>
	}) => Maybe<Array<Maybe<User>>>
	following: (args: {
		/**
		 * User id of the follower/followed
		 */
		userId: Scalars["Int"]
		/**
		 * The order the results will be returned in
		 */
		sort?: Maybe<Array<Maybe<UserSort>>>
	}) => Maybe<Array<Maybe<User>>>
	activities: (args?: {
		/**
		 * Filter by the activity id
		 */
		id?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the owner user id
		 */
		userId?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the id of the user who sent a message
		 */
		messengerId?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the associated media id of the activity
		 */
		mediaId?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the type of activity
		 */
		type?: Maybe<ActivityType>
		/**
		 * Filter activity to users who are being followed by the authenticated user
		 */
		isFollowing?: Maybe<Scalars["Boolean"]>
		/**
		 * Filter activity to only activity with replies
		 */
		hasReplies?: Maybe<Scalars["Boolean"]>
		/**
		 * Filter activity to only activity with replies or is of type text
		 */
		hasRepliesOrTypeText?: Maybe<Scalars["Boolean"]>
		/**
		 * Filter by the time the activity was created
		 */
		createdAt?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the activity id
		 */
		id_not?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the activity id
		 */
		id_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
		/**
		 * Filter by the activity id
		 */
		id_not_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
		/**
		 * Filter by the owner user id
		 */
		userId_not?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the owner user id
		 */
		userId_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
		/**
		 * Filter by the owner user id
		 */
		userId_not_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
		/**
		 * Filter by the id of the user who sent a message
		 */
		messengerId_not?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the id of the user who sent a message
		 */
		messengerId_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
		/**
		 * Filter by the id of the user who sent a message
		 */
		messengerId_not_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
		/**
		 * Filter by the associated media id of the activity
		 */
		mediaId_not?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the associated media id of the activity
		 */
		mediaId_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
		/**
		 * Filter by the associated media id of the activity
		 */
		mediaId_not_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
		/**
		 * Filter by the type of activity
		 */
		type_not?: Maybe<ActivityType>
		/**
		 * Filter by the type of activity
		 */
		type_in?: Maybe<Array<Maybe<ActivityType>>>
		/**
		 * Filter by the type of activity
		 */
		type_not_in?: Maybe<Array<Maybe<ActivityType>>>
		/**
		 * Filter by the time the activity was created
		 */
		createdAt_greater?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the time the activity was created
		 */
		createdAt_lesser?: Maybe<Scalars["Int"]>
		/**
		 * The order the results will be returned in
		 */
		sort?: Maybe<Array<Maybe<ActivitySort>>>
	}) => Maybe<Array<Maybe<ActivityUnion>>>
	activityReplies: (args?: {
		/**
		 * Filter by the reply id
		 */
		id?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the parent id
		 */
		activityId?: Maybe<Scalars["Int"]>
	}) => Maybe<Array<Maybe<ActivityReply>>>
	threads: (args?: {
		/**
		 * Filter by the thread id
		 */
		id?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the user id of the thread's creator
		 */
		userId?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the user id of the last user to comment on the thread
		 */
		replyUserId?: Maybe<Scalars["Int"]>
		/**
		 * Filter by if the currently authenticated user's subscribed threads
		 */
		subscribed?: Maybe<Scalars["Boolean"]>
		/**
		 * Filter by thread category id
		 */
		categoryId?: Maybe<Scalars["Int"]>
		/**
		 * Filter by thread media id category
		 */
		mediaCategoryId?: Maybe<Scalars["Int"]>
		/**
		 * Filter by search query
		 */
		search?: Maybe<Scalars["String"]>
		/**
		 * Filter by the thread id
		 */
		id_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
		/**
		 * The order the results will be returned in
		 */
		sort?: Maybe<Array<Maybe<ThreadSort>>>
	}) => Maybe<Array<Maybe<Thread>>>
	threadComments: (args?: {
		/**
		 * Filter by the comment id
		 */
		id?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the thread id
		 */
		threadId?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the user id of the comment's creator
		 */
		userId?: Maybe<Scalars["Int"]>
		/**
		 * The order the results will be returned in
		 */
		sort?: Maybe<Array<Maybe<ThreadCommentSort>>>
	}) => Maybe<Array<Maybe<ThreadComment>>>
	reviews: (args?: {
		/**
		 * Filter by Review id
		 */
		id?: Maybe<Scalars["Int"]>
		/**
		 * Filter by media id
		 */
		mediaId?: Maybe<Scalars["Int"]>
		/**
		 * Filter by user id
		 */
		userId?: Maybe<Scalars["Int"]>
		/**
		 * Filter by media type
		 */
		mediaType?: Maybe<MediaType>
		/**
		 * The order the results will be returned in
		 */
		sort?: Maybe<Array<Maybe<ReviewSort>>>
	}) => Maybe<Array<Maybe<Review>>>
	recommendations: (args?: {
		/**
		 * Filter by recommendation id
		 */
		id?: Maybe<Scalars["Int"]>
		/**
		 * Filter by media id
		 */
		mediaId?: Maybe<Scalars["Int"]>
		/**
		 * Filter by media recommendation id
		 */
		mediaRecommendationId?: Maybe<Scalars["Int"]>
		/**
		 * Filter by user who created the recommendation
		 */
		userId?: Maybe<Scalars["Int"]>
		/**
		 * Filter by total rating of the recommendation
		 */
		rating?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the media on the authenticated user's lists
		 */
		onList?: Maybe<Scalars["Boolean"]>
		/**
		 * Filter by total rating of the recommendation
		 */
		rating_greater?: Maybe<Scalars["Int"]>
		/**
		 * Filter by total rating of the recommendation
		 */
		rating_lesser?: Maybe<Scalars["Int"]>
		/**
		 * The order the results will be returned in
		 */
		sort?: Maybe<Array<Maybe<RecommendationSort>>>
	}) => Maybe<Array<Maybe<Recommendation>>>
	likes: (args?: {
		/**
		 * The id of the likeable type
		 */
		likeableId?: Maybe<Scalars["Int"]>
		/**
		 * The type of model the id applies to
		 */
		type?: Maybe<LikeableType>
	}) => Maybe<Array<Maybe<User>>>
}

export interface PageInfo {
	__typename: "PageInfo" | undefined
	/**
	 * The total number of items
	 */
	total?: Maybe<ScalarsEnums["Int"]>
	/**
	 * The count on a page
	 */
	perPage?: Maybe<ScalarsEnums["Int"]>
	/**
	 * The current page
	 */
	currentPage?: Maybe<ScalarsEnums["Int"]>
	/**
	 * The last page
	 */
	lastPage?: Maybe<ScalarsEnums["Int"]>
	/**
	 * If there is another page
	 */
	hasNextPage?: Maybe<ScalarsEnums["Boolean"]>
}

/**
 * A user
 */
export interface User {
	__typename: "User" | undefined
	/**
	 * The id of the user
	 */
	id: ScalarsEnums["Int"]
	/**
	 * The name of the user
	 */
	name: ScalarsEnums["String"]
	/**
	 * The bio written by user (Markdown)
	 */
	about: (args?: {
		/**
		 * Return the string in pre-parsed html instead of markdown
		 */
		asHtml?: Maybe<Scalars["Boolean"]>
	}) => Maybe<ScalarsEnums["String"]>
	/**
	 * The user's avatar images
	 */
	avatar?: Maybe<UserAvatar>
	/**
	 * The user's banner images
	 */
	bannerImage?: Maybe<ScalarsEnums["String"]>
	/**
	 * If the authenticated user if following this user
	 */
	isFollowing?: Maybe<ScalarsEnums["Boolean"]>
	/**
	 * If this user if following the authenticated user
	 */
	isFollower?: Maybe<ScalarsEnums["Boolean"]>
	/**
	 * If the user is blocked by the authenticated user
	 */
	isBlocked?: Maybe<ScalarsEnums["Boolean"]>
	bans?: Maybe<ScalarsEnums["Json"]>
	/**
	 * The user's general options
	 */
	options?: Maybe<UserOptions>
	/**
	 * The user's media list options
	 */
	mediaListOptions?: Maybe<MediaListOptions>
	/**
	 * The users favourites
	 */
	favourites: (args?: {
		/**
		 * Deprecated. Use page arguments on each favourite field instead.
		 */
		page?: Maybe<Scalars["Int"]>
	}) => Maybe<Favourites>
	/**
	 * The users anime & manga list statistics
	 */
	statistics?: Maybe<UserStatisticTypes>
	/**
	 * The number of unread notifications the user has
	 */
	unreadNotificationCount?: Maybe<ScalarsEnums["Int"]>
	/**
	 * The url for the user page on the AniList website
	 */
	siteUrl?: Maybe<ScalarsEnums["String"]>
	/**
	 * The donation tier of the user
	 */
	donatorTier?: Maybe<ScalarsEnums["Int"]>
	/**
	 * Custom donation badge text
	 */
	donatorBadge?: Maybe<ScalarsEnums["String"]>
	/**
	 * If the user is a moderator or data moderator
	 */
	moderatorStatus?: Maybe<ScalarsEnums["String"]>
	/**
	 * When the user's data was last updated
	 */
	updatedAt?: Maybe<ScalarsEnums["Int"]>
	/**
	 * The user's statistics
	 * @deprecated Deprecated. Replaced with statistics field.
	 */
	stats?: Maybe<UserStats>
}

/**
 * A user's avatars
 */
export interface UserAvatar {
	__typename: "UserAvatar" | undefined
	/**
	 * The avatar of user at its largest size
	 */
	large?: Maybe<ScalarsEnums["String"]>
	/**
	 * The avatar of user at medium size
	 */
	medium?: Maybe<ScalarsEnums["String"]>
}

/**
 * A user's general options
 */
export interface UserOptions {
	__typename: "UserOptions" | undefined
	/**
	 * The language the user wants to see media titles in
	 */
	titleLanguage?: Maybe<ScalarsEnums["UserTitleLanguage"]>
	/**
	 * Whether the user has enabled viewing of 18+ content
	 */
	displayAdultContent?: Maybe<ScalarsEnums["Boolean"]>
	/**
	 * Whether the user receives notifications when a show they are watching aires
	 */
	airingNotifications?: Maybe<ScalarsEnums["Boolean"]>
	/**
	 * Profile highlight color (blue, purple, pink, orange, red, green, gray)
	 */
	profileColor?: Maybe<ScalarsEnums["String"]>
	/**
	 * Notification options
	 */
	notificationOptions?: Maybe<Array<Maybe<NotificationOption>>>
	/**
	 * The user's timezone offset (Auth user only)
	 */
	timezone?: Maybe<ScalarsEnums["String"]>
	/**
	 * Minutes between activity for them to be merged together. 0 is Never, Above 2 weeks (20160 mins) is Always.
	 */
	activityMergeTime?: Maybe<ScalarsEnums["Int"]>
}

/**
 * Notification option
 */
export interface NotificationOption {
	__typename: "NotificationOption" | undefined
	/**
	 * The type of notification
	 */
	type?: Maybe<ScalarsEnums["NotificationType"]>
	/**
	 * Whether this type of notification is enabled
	 */
	enabled?: Maybe<ScalarsEnums["Boolean"]>
}

/**
 * A user's list options
 */
export interface MediaListOptions {
	__typename: "MediaListOptions" | undefined
	/**
	 * The score format the user is using for media lists
	 */
	scoreFormat?: Maybe<ScalarsEnums["ScoreFormat"]>
	/**
	 * The default order list rows should be displayed in
	 */
	rowOrder?: Maybe<ScalarsEnums["String"]>
	/**
	 * @deprecated No longer used
	 */
	useLegacyLists?: Maybe<ScalarsEnums["Boolean"]>
	/**
	 * The user's anime list options
	 */
	animeList?: Maybe<MediaListTypeOptions>
	/**
	 * The user's manga list options
	 */
	mangaList?: Maybe<MediaListTypeOptions>
	/**
	 * The list theme options for both lists
	 * @deprecated No longer used
	 */
	sharedTheme?: Maybe<ScalarsEnums["Json"]>
	/**
	 * If the shared theme should be used instead of the individual list themes
	 * @deprecated No longer used
	 */
	sharedThemeEnabled?: Maybe<ScalarsEnums["Boolean"]>
}

/**
 * A user's list options for anime or manga lists
 */
export interface MediaListTypeOptions {
	__typename: "MediaListTypeOptions" | undefined
	/**
	 * The order each list should be displayed in
	 */
	sectionOrder?: Maybe<Array<Maybe<ScalarsEnums["String"]>>>
	/**
	 * If the completed sections of the list should be separated by format
	 */
	splitCompletedSectionByFormat?: Maybe<ScalarsEnums["Boolean"]>
	/**
	 * The list theme options
	 * @deprecated This field has not yet been fully implemented and may change without warning
	 */
	theme?: Maybe<ScalarsEnums["Json"]>
	/**
	 * The names of the user's custom lists
	 */
	customLists?: Maybe<Array<Maybe<ScalarsEnums["String"]>>>
	/**
	 * The names of the user's advanced scoring sections
	 */
	advancedScoring?: Maybe<Array<Maybe<ScalarsEnums["String"]>>>
	/**
	 * If advanced scoring is enabled
	 */
	advancedScoringEnabled?: Maybe<ScalarsEnums["Boolean"]>
}

/**
 * User's favourite anime, manga, characters, staff & studios
 */
export interface Favourites {
	__typename: "Favourites" | undefined
	/**
	 * Favourite anime
	 */
	anime: (args?: {
		/**
		 * The page number
		 */
		page?: Maybe<Scalars["Int"]>
		/**
		 * The amount of entries per page, max 25
		 */
		perPage?: Maybe<Scalars["Int"]>
	}) => Maybe<MediaConnection>
	/**
	 * Favourite manga
	 */
	manga: (args?: {
		/**
		 * The page number
		 */
		page?: Maybe<Scalars["Int"]>
		/**
		 * The amount of entries per page, max 25
		 */
		perPage?: Maybe<Scalars["Int"]>
	}) => Maybe<MediaConnection>
	/**
	 * Favourite characters
	 */
	characters: (args?: {
		/**
		 * The page number
		 */
		page?: Maybe<Scalars["Int"]>
		/**
		 * The amount of entries per page, max 25
		 */
		perPage?: Maybe<Scalars["Int"]>
	}) => Maybe<CharacterConnection>
	/**
	 * Favourite staff
	 */
	staff: (args?: {
		/**
		 * The page number
		 */
		page?: Maybe<Scalars["Int"]>
		/**
		 * The amount of entries per page, max 25
		 */
		perPage?: Maybe<Scalars["Int"]>
	}) => Maybe<StaffConnection>
	/**
	 * Favourite studios
	 */
	studios: (args?: {
		/**
		 * The page number
		 */
		page?: Maybe<Scalars["Int"]>
		/**
		 * The amount of entries per page, max 25
		 */
		perPage?: Maybe<Scalars["Int"]>
	}) => Maybe<StudioConnection>
}

export interface MediaConnection {
	__typename: "MediaConnection" | undefined
	edges?: Maybe<Array<Maybe<MediaEdge>>>
	nodes?: Maybe<Array<Maybe<Media>>>
	/**
	 * The pagination information
	 */
	pageInfo?: Maybe<PageInfo>
}

/**
 * Media connection edge
 */
export interface MediaEdge {
	__typename: "MediaEdge" | undefined
	node?: Maybe<Media>
	/**
	 * The id of the connection
	 */
	id?: Maybe<ScalarsEnums["Int"]>
	/**
	 * The type of relation to the parent model
	 */
	relationType: (args?: {
		/**
		 * Provide 2 to use new version 2 of relation enum
		 */
		version?: Maybe<Scalars["Int"]>
	}) => Maybe<ScalarsEnums["MediaRelation"]>
	/**
	 * If the studio is the main animation studio of the media (For Studio->MediaConnection field only)
	 */
	isMainStudio: ScalarsEnums["Boolean"]
	/**
	 * The characters in the media voiced by the parent actor
	 */
	characters?: Maybe<Array<Maybe<Character>>>
	/**
	 * The characters role in the media
	 */
	characterRole?: Maybe<ScalarsEnums["CharacterRole"]>
	/**
	 * Media specific character name
	 */
	characterName?: Maybe<ScalarsEnums["String"]>
	/**
	 * Notes regarding the VA's role for the character
	 */
	roleNotes?: Maybe<ScalarsEnums["String"]>
	/**
	 * Used for grouping roles where multiple dubs exist for the same language. Either dubbing company name or language variant.
	 */
	dubGroup?: Maybe<ScalarsEnums["String"]>
	/**
	 * The role of the staff member in the production of the media
	 */
	staffRole?: Maybe<ScalarsEnums["String"]>
	/**
	 * The voice actors of the character
	 */
	voiceActors: (args?: {
		language?: Maybe<StaffLanguage>
		sort?: Maybe<Array<Maybe<StaffSort>>>
	}) => Maybe<Array<Maybe<Staff>>>
	/**
	 * The voice actors of the character with role date
	 */
	voiceActorRoles: (args?: {
		language?: Maybe<StaffLanguage>
		sort?: Maybe<Array<Maybe<StaffSort>>>
	}) => Maybe<Array<Maybe<StaffRoleType>>>
	/**
	 * The order the media should be displayed from the users favourites
	 */
	favouriteOrder?: Maybe<ScalarsEnums["Int"]>
}

/**
 * Anime or Manga
 */
export interface Media {
	__typename: "Media" | undefined
	/**
	 * The id of the media
	 */
	id: ScalarsEnums["Int"]
	/**
	 * The mal id of the media
	 */
	idMal?: Maybe<ScalarsEnums["Int"]>
	/**
	 * The official titles of the media in various languages
	 */
	title?: Maybe<MediaTitle>
	/**
	 * The type of the media; anime or manga
	 */
	type?: Maybe<ScalarsEnums["MediaType"]>
	/**
	 * The format the media was released in
	 */
	format?: Maybe<ScalarsEnums["MediaFormat"]>
	/**
	 * The current releasing status of the media
	 */
	status: (args?: {
		/**
		 * Provide 2 to use new version 2 of sources enum
		 */
		version?: Maybe<Scalars["Int"]>
	}) => Maybe<ScalarsEnums["MediaStatus"]>
	/**
	 * Short description of the media's story and characters
	 */
	description: (args?: {
		/**
		 * Return the string in pre-parsed html instead of markdown
		 */
		asHtml?: Maybe<Scalars["Boolean"]>
	}) => Maybe<ScalarsEnums["String"]>
	/**
	 * The first official release date of the media
	 */
	startDate?: Maybe<FuzzyDate>
	/**
	 * The last official release date of the media
	 */
	endDate?: Maybe<FuzzyDate>
	/**
	 * The season the media was initially released in
	 */
	season?: Maybe<ScalarsEnums["MediaSeason"]>
	/**
	 * The season year the media was initially released in
	 */
	seasonYear?: Maybe<ScalarsEnums["Int"]>
	/**
	 * The year & season the media was initially released in
	 */
	seasonInt?: Maybe<ScalarsEnums["Int"]>
	/**
	 * The amount of episodes the anime has when complete
	 */
	episodes?: Maybe<ScalarsEnums["Int"]>
	/**
	 * The general length of each anime episode in minutes
	 */
	duration?: Maybe<ScalarsEnums["Int"]>
	/**
	 * The amount of chapters the manga has when complete
	 */
	chapters?: Maybe<ScalarsEnums["Int"]>
	/**
	 * The amount of volumes the manga has when complete
	 */
	volumes?: Maybe<ScalarsEnums["Int"]>
	/**
	 * Where the media was created. (ISO 3166-1 alpha-2)
	 */
	countryOfOrigin?: Maybe<ScalarsEnums["CountryCode"]>
	/**
	 * If the media is officially licensed or a self-published doujin release
	 */
	isLicensed?: Maybe<ScalarsEnums["Boolean"]>
	/**
	 * Source type the media was adapted from.
	 */
	source: (args?: {
		/**
		 * Provide 2 to use new version 2 of sources enum
		 */
		version?: Maybe<Scalars["Int"]>
	}) => Maybe<ScalarsEnums["MediaSource"]>
	/**
	 * Official Twitter hashtags for the media
	 */
	hashtag?: Maybe<ScalarsEnums["String"]>
	/**
	 * Media trailer or advertisement
	 */
	trailer?: Maybe<MediaTrailer>
	/**
	 * When the media's data was last updated
	 */
	updatedAt?: Maybe<ScalarsEnums["Int"]>
	/**
	 * The cover images of the media
	 */
	coverImage?: Maybe<MediaCoverImage>
	/**
	 * The banner image of the media
	 */
	bannerImage?: Maybe<ScalarsEnums["String"]>
	/**
	 * The genres of the media
	 */
	genres?: Maybe<Array<Maybe<ScalarsEnums["String"]>>>
	/**
	 * Alternative titles of the media
	 */
	synonyms?: Maybe<Array<Maybe<ScalarsEnums["String"]>>>
	/**
	 * A weighted average score of all the user's scores of the media
	 */
	averageScore?: Maybe<ScalarsEnums["Int"]>
	/**
	 * Mean score of all the user's scores of the media
	 */
	meanScore?: Maybe<ScalarsEnums["Int"]>
	/**
	 * The number of users with the media on their list
	 */
	popularity?: Maybe<ScalarsEnums["Int"]>
	/**
	 * Locked media may not be added to lists our favorited. This may be due to the entry pending for deletion or other reasons.
	 */
	isLocked?: Maybe<ScalarsEnums["Boolean"]>
	/**
	 * The amount of related activity in the past hour
	 */
	trending?: Maybe<ScalarsEnums["Int"]>
	/**
	 * The amount of user's who have favourited the media
	 */
	favourites?: Maybe<ScalarsEnums["Int"]>
	/**
	 * List of tags that describes elements and themes of the media
	 */
	tags?: Maybe<Array<Maybe<MediaTag>>>
	/**
	 * Other media in the same or connecting franchise
	 */
	relations?: Maybe<MediaConnection>
	/**
	 * The characters in the media
	 */
	characters: (args?: {
		sort?: Maybe<Array<Maybe<CharacterSort>>>
		role?: Maybe<CharacterRole>
		/**
		 * The page
		 */
		page?: Maybe<Scalars["Int"]>
		/**
		 * The amount of entries per page, max 25
		 */
		perPage?: Maybe<Scalars["Int"]>
	}) => Maybe<CharacterConnection>
	/**
	 * The staff who produced the media
	 */
	staff: (args?: {
		sort?: Maybe<Array<Maybe<StaffSort>>>
		/**
		 * The page
		 */
		page?: Maybe<Scalars["Int"]>
		/**
		 * The amount of entries per page, max 25
		 */
		perPage?: Maybe<Scalars["Int"]>
	}) => Maybe<StaffConnection>
	/**
	 * The companies who produced the media
	 */
	studios: (args?: {
		sort?: Maybe<Array<Maybe<StudioSort>>>
		isMain?: Maybe<Scalars["Boolean"]>
	}) => Maybe<StudioConnection>
	/**
	 * If the media is marked as favourite by the current authenticated user
	 */
	isFavourite: ScalarsEnums["Boolean"]
	/**
	 * If the media is intended only for 18+ adult audiences
	 */
	isAdult?: Maybe<ScalarsEnums["Boolean"]>
	/**
	 * The media's next episode airing schedule
	 */
	nextAiringEpisode?: Maybe<AiringSchedule>
	/**
	 * The media's entire airing schedule
	 */
	airingSchedule: (args?: {
		/**
		 * Filter to episodes that have not yet aired
		 */
		notYetAired?: Maybe<Scalars["Boolean"]>
		/**
		 * The page
		 */
		page?: Maybe<Scalars["Int"]>
		/**
		 * The amount of entries per page, max 25
		 */
		perPage?: Maybe<Scalars["Int"]>
	}) => Maybe<AiringScheduleConnection>
	/**
	 * The media's daily trend stats
	 */
	trends: (args?: {
		sort?: Maybe<Array<Maybe<MediaTrendSort>>>
		/**
		 * Filter to stats recorded while the media was releasing
		 */
		releasing?: Maybe<Scalars["Boolean"]>
		/**
		 * The page
		 */
		page?: Maybe<Scalars["Int"]>
		/**
		 * The amount of entries per page, max 25
		 */
		perPage?: Maybe<Scalars["Int"]>
	}) => Maybe<MediaTrendConnection>
	/**
	 * External links to another site related to the media
	 */
	externalLinks?: Maybe<Array<Maybe<MediaExternalLink>>>
	/**
	 * Data and links to legal streaming episodes on external sites
	 */
	streamingEpisodes?: Maybe<Array<Maybe<MediaStreamingEpisode>>>
	/**
	 * The ranking of the media in a particular time span and format compared to other media
	 */
	rankings?: Maybe<Array<Maybe<MediaRank>>>
	/**
	 * The authenticated user's media list entry for the media
	 */
	mediaListEntry?: Maybe<MediaList>
	/**
	 * User reviews of the media
	 */
	reviews: (args?: {
		limit?: Maybe<Scalars["Int"]>
		sort?: Maybe<Array<Maybe<ReviewSort>>>
		/**
		 * The page
		 */
		page?: Maybe<Scalars["Int"]>
		/**
		 * The amount of entries per page, max 25
		 */
		perPage?: Maybe<Scalars["Int"]>
	}) => Maybe<ReviewConnection>
	/**
	 * User recommendations for similar media
	 */
	recommendations: (args?: {
		sort?: Maybe<Array<Maybe<RecommendationSort>>>
		/**
		 * The page
		 */
		page?: Maybe<Scalars["Int"]>
		/**
		 * The amount of entries per page, max 25
		 */
		perPage?: Maybe<Scalars["Int"]>
	}) => Maybe<RecommendationConnection>
	stats?: Maybe<MediaStats>
	/**
	 * The url for the media page on the AniList website
	 */
	siteUrl?: Maybe<ScalarsEnums["String"]>
	/**
	 * If the media should have forum thread automatically created for it on airing episode release
	 */
	autoCreateForumThread?: Maybe<ScalarsEnums["Boolean"]>
	/**
	 * If the media is blocked from being recommended to/from
	 */
	isRecommendationBlocked?: Maybe<ScalarsEnums["Boolean"]>
	/**
	 * Notes for site moderators
	 */
	modNotes?: Maybe<ScalarsEnums["String"]>
}

/**
 * The official titles of the media in various languages
 */
export interface MediaTitle {
	__typename: "MediaTitle" | undefined
	/**
	 * The romanization of the native language title
	 */
	romaji: (args?: {
		stylised?: Maybe<Scalars["Boolean"]>
	}) => Maybe<ScalarsEnums["String"]>
	/**
	 * The official english title
	 */
	english: (args?: {
		stylised?: Maybe<Scalars["Boolean"]>
	}) => Maybe<ScalarsEnums["String"]>
	/**
	 * Official title in it's native language
	 */
	native: (args?: {
		stylised?: Maybe<Scalars["Boolean"]>
	}) => Maybe<ScalarsEnums["String"]>
	/**
	 * The currently authenticated users preferred title language. Default romaji for non-authenticated
	 */
	userPreferred?: Maybe<ScalarsEnums["String"]>
}

/**
 * Date object that allows for incomplete date values (fuzzy)
 */
export interface FuzzyDate {
	__typename: "FuzzyDate" | undefined
	/**
	 * Numeric Year (2017)
	 */
	year?: Maybe<ScalarsEnums["Int"]>
	/**
	 * Numeric Month (3)
	 */
	month?: Maybe<ScalarsEnums["Int"]>
	/**
	 * Numeric Day (24)
	 */
	day?: Maybe<ScalarsEnums["Int"]>
}

/**
 * Media trailer or advertisement
 */
export interface MediaTrailer {
	__typename: "MediaTrailer" | undefined
	/**
	 * The trailer video id
	 */
	id?: Maybe<ScalarsEnums["String"]>
	/**
	 * The site the video is hosted by (Currently either youtube or dailymotion)
	 */
	site?: Maybe<ScalarsEnums["String"]>
	/**
	 * The url for the thumbnail image of the video
	 */
	thumbnail?: Maybe<ScalarsEnums["String"]>
}

export interface MediaCoverImage {
	__typename: "MediaCoverImage" | undefined
	/**
	 * The cover image url of the media at its largest size. If this size isn't available, large will be provided instead.
	 */
	extraLarge?: Maybe<ScalarsEnums["String"]>
	/**
	 * The cover image url of the media at a large size
	 */
	large?: Maybe<ScalarsEnums["String"]>
	/**
	 * The cover image url of the media at medium size
	 */
	medium?: Maybe<ScalarsEnums["String"]>
	/**
	 * Average #hex color of cover image
	 */
	color?: Maybe<ScalarsEnums["String"]>
}

/**
 * A tag that describes a theme or element of the media
 */
export interface MediaTag {
	__typename: "MediaTag" | undefined
	/**
	 * The id of the tag
	 */
	id: ScalarsEnums["Int"]
	/**
	 * The name of the tag
	 */
	name: ScalarsEnums["String"]
	/**
	 * A general description of the tag
	 */
	description?: Maybe<ScalarsEnums["String"]>
	/**
	 * The categories of tags this tag belongs to
	 */
	category?: Maybe<ScalarsEnums["String"]>
	/**
	 * The relevance ranking of the tag out of the 100 for this media
	 */
	rank?: Maybe<ScalarsEnums["Int"]>
	/**
	 * If the tag could be a spoiler for any media
	 */
	isGeneralSpoiler?: Maybe<ScalarsEnums["Boolean"]>
	/**
	 * If the tag is a spoiler for this media
	 */
	isMediaSpoiler?: Maybe<ScalarsEnums["Boolean"]>
	/**
	 * If the tag is only for adult 18+ media
	 */
	isAdult?: Maybe<ScalarsEnums["Boolean"]>
}

export interface CharacterConnection {
	__typename: "CharacterConnection" | undefined
	edges?: Maybe<Array<Maybe<CharacterEdge>>>
	nodes?: Maybe<Array<Maybe<Character>>>
	/**
	 * The pagination information
	 */
	pageInfo?: Maybe<PageInfo>
}

/**
 * Character connection edge
 */
export interface CharacterEdge {
	__typename: "CharacterEdge" | undefined
	node?: Maybe<Character>
	/**
	 * The id of the connection
	 */
	id?: Maybe<ScalarsEnums["Int"]>
	/**
	 * The characters role in the media
	 */
	role?: Maybe<ScalarsEnums["CharacterRole"]>
	/**
	 * Media specific character name
	 */
	name?: Maybe<ScalarsEnums["String"]>
	/**
	 * The voice actors of the character
	 */
	voiceActors: (args?: {
		language?: Maybe<StaffLanguage>
		sort?: Maybe<Array<Maybe<StaffSort>>>
	}) => Maybe<Array<Maybe<Staff>>>
	/**
	 * The voice actors of the character with role date
	 */
	voiceActorRoles: (args?: {
		language?: Maybe<StaffLanguage>
		sort?: Maybe<Array<Maybe<StaffSort>>>
	}) => Maybe<Array<Maybe<StaffRoleType>>>
	/**
	 * The media the character is in
	 */
	media?: Maybe<Array<Maybe<Media>>>
	/**
	 * The order the character should be displayed from the users favourites
	 */
	favouriteOrder?: Maybe<ScalarsEnums["Int"]>
}

/**
 * A character that features in an anime or manga
 */
export interface Character {
	__typename: "Character" | undefined
	/**
	 * The id of the character
	 */
	id: ScalarsEnums["Int"]
	/**
	 * The names of the character
	 */
	name?: Maybe<CharacterName>
	/**
	 * Character images
	 */
	image?: Maybe<CharacterImage>
	/**
	 * A general description of the character
	 */
	description: (args?: {
		/**
		 * Return the string in pre-parsed html instead of markdown
		 */
		asHtml?: Maybe<Scalars["Boolean"]>
	}) => Maybe<ScalarsEnums["String"]>
	/**
	 * The character's gender. Usually Male, Female, or Non-binary but can be any string.
	 */
	gender?: Maybe<ScalarsEnums["String"]>
	/**
	 * The character's birth date
	 */
	dateOfBirth?: Maybe<FuzzyDate>
	/**
	 * The character's age. Note this is a string, not an int, it may contain further text and additional ages.
	 */
	age?: Maybe<ScalarsEnums["String"]>
	/**
	 * If the character is marked as favourite by the currently authenticated user
	 */
	isFavourite: ScalarsEnums["Boolean"]
	/**
	 * If the character is blocked from being added to favourites
	 */
	isFavouriteBlocked: ScalarsEnums["Boolean"]
	/**
	 * The url for the character page on the AniList website
	 */
	siteUrl?: Maybe<ScalarsEnums["String"]>
	/**
	 * Media that includes the character
	 */
	media: (args?: {
		sort?: Maybe<Array<Maybe<MediaSort>>>
		type?: Maybe<MediaType>
		onList?: Maybe<Scalars["Boolean"]>
		/**
		 * The page
		 */
		page?: Maybe<Scalars["Int"]>
		/**
		 * The amount of entries per page, max 25
		 */
		perPage?: Maybe<Scalars["Int"]>
	}) => Maybe<MediaConnection>
	/**
	 * @deprecated No data available
	 */
	updatedAt?: Maybe<ScalarsEnums["Int"]>
	/**
	 * The amount of user's who have favourited the character
	 */
	favourites?: Maybe<ScalarsEnums["Int"]>
	/**
	 * Notes for site moderators
	 */
	modNotes?: Maybe<ScalarsEnums["String"]>
}

/**
 * The names of the character
 */
export interface CharacterName {
	__typename: "CharacterName" | undefined
	/**
	 * The character's given name
	 */
	first?: Maybe<ScalarsEnums["String"]>
	/**
	 * The character's middle name
	 */
	middle?: Maybe<ScalarsEnums["String"]>
	/**
	 * The character's surname
	 */
	last?: Maybe<ScalarsEnums["String"]>
	/**
	 * The character's first and last name
	 */
	full?: Maybe<ScalarsEnums["String"]>
	/**
	 * The character's full name in their native language
	 */
	native?: Maybe<ScalarsEnums["String"]>
	/**
	 * Other names the character might be referred to as
	 */
	alternative?: Maybe<Array<Maybe<ScalarsEnums["String"]>>>
	/**
	 * Other names the character might be referred to as but are spoilers
	 */
	alternativeSpoiler?: Maybe<Array<Maybe<ScalarsEnums["String"]>>>
}

export interface CharacterImage {
	__typename: "CharacterImage" | undefined
	/**
	 * The character's image of media at its largest size
	 */
	large?: Maybe<ScalarsEnums["String"]>
	/**
	 * The character's image of media at medium size
	 */
	medium?: Maybe<ScalarsEnums["String"]>
}

/**
 * Voice actors or production staff
 */
export interface Staff {
	__typename: "Staff" | undefined
	/**
	 * The id of the staff member
	 */
	id: ScalarsEnums["Int"]
	/**
	 * The names of the staff member
	 */
	name?: Maybe<StaffName>
	/**
	 * The primary language the staff member dub's in
	 * @deprecated Replaced with languageV2
	 */
	language?: Maybe<ScalarsEnums["StaffLanguage"]>
	/**
	 * The primary language of the staff member. Current values: Japanese, English, Korean, Italian, Spanish, Portuguese, French, German, Hebrew, Hungarian, Chinese, Arabic, Filipino, Catalan
	 */
	languageV2?: Maybe<ScalarsEnums["String"]>
	/**
	 * The staff images
	 */
	image?: Maybe<StaffImage>
	/**
	 * A general description of the staff member
	 */
	description: (args?: {
		/**
		 * Return the string in pre-parsed html instead of markdown
		 */
		asHtml?: Maybe<Scalars["Boolean"]>
	}) => Maybe<ScalarsEnums["String"]>
	/**
	 * The person's primary occupations
	 */
	primaryOccupations?: Maybe<Array<Maybe<ScalarsEnums["String"]>>>
	/**
	 * The staff's gender. Usually Male, Female, or Non-binary but can be any string.
	 */
	gender?: Maybe<ScalarsEnums["String"]>
	dateOfBirth?: Maybe<FuzzyDate>
	dateOfDeath?: Maybe<FuzzyDate>
	/**
	 * The person's age in years
	 */
	age?: Maybe<ScalarsEnums["Int"]>
	/**
	 * [startYear, endYear] (If the 2nd value is not present staff is still active)
	 */
	yearsActive?: Maybe<Array<Maybe<ScalarsEnums["Int"]>>>
	/**
	 * The persons birthplace or hometown
	 */
	homeTown?: Maybe<ScalarsEnums["String"]>
	/**
	 * If the staff member is marked as favourite by the currently authenticated user
	 */
	isFavourite: ScalarsEnums["Boolean"]
	/**
	 * If the staff member is blocked from being added to favourites
	 */
	isFavouriteBlocked: ScalarsEnums["Boolean"]
	/**
	 * The url for the staff page on the AniList website
	 */
	siteUrl?: Maybe<ScalarsEnums["String"]>
	/**
	 * Media where the staff member has a production role
	 */
	staffMedia: (args?: {
		sort?: Maybe<Array<Maybe<MediaSort>>>
		type?: Maybe<MediaType>
		onList?: Maybe<Scalars["Boolean"]>
		/**
		 * The page
		 */
		page?: Maybe<Scalars["Int"]>
		/**
		 * The amount of entries per page, max 25
		 */
		perPage?: Maybe<Scalars["Int"]>
	}) => Maybe<MediaConnection>
	/**
	 * Characters voiced by the actor
	 */
	characters: (args?: {
		sort?: Maybe<Array<Maybe<CharacterSort>>>
		/**
		 * The page
		 */
		page?: Maybe<Scalars["Int"]>
		/**
		 * The amount of entries per page, max 25
		 */
		perPage?: Maybe<Scalars["Int"]>
	}) => Maybe<CharacterConnection>
	/**
	 * Media the actor voiced characters in. (Same data as characters with media as node instead of characters)
	 */
	characterMedia: (args?: {
		sort?: Maybe<Array<Maybe<MediaSort>>>
		onList?: Maybe<Scalars["Boolean"]>
		/**
		 * The page
		 */
		page?: Maybe<Scalars["Int"]>
		/**
		 * The amount of entries per page, max 25
		 */
		perPage?: Maybe<Scalars["Int"]>
	}) => Maybe<MediaConnection>
	/**
	 * @deprecated No data available
	 */
	updatedAt?: Maybe<ScalarsEnums["Int"]>
	/**
	 * Staff member that the submission is referencing
	 */
	staff?: Maybe<Staff>
	/**
	 * Submitter for the submission
	 */
	submitter?: Maybe<User>
	/**
	 * Status of the submission
	 */
	submissionStatus?: Maybe<ScalarsEnums["Int"]>
	/**
	 * Inner details of submission status
	 */
	submissionNotes?: Maybe<ScalarsEnums["String"]>
	/**
	 * The amount of user's who have favourited the staff member
	 */
	favourites?: Maybe<ScalarsEnums["Int"]>
	/**
	 * Notes for site moderators
	 */
	modNotes?: Maybe<ScalarsEnums["String"]>
}

/**
 * The names of the staff member
 */
export interface StaffName {
	__typename: "StaffName" | undefined
	/**
	 * The person's given name
	 */
	first?: Maybe<ScalarsEnums["String"]>
	/**
	 * The person's middle name
	 */
	middle?: Maybe<ScalarsEnums["String"]>
	/**
	 * The person's surname
	 */
	last?: Maybe<ScalarsEnums["String"]>
	/**
	 * The person's first and last name
	 */
	full?: Maybe<ScalarsEnums["String"]>
	/**
	 * The person's full name in their native language
	 */
	native?: Maybe<ScalarsEnums["String"]>
	/**
	 * Other names the staff member might be referred to as (pen names)
	 */
	alternative?: Maybe<Array<Maybe<ScalarsEnums["String"]>>>
}

export interface StaffImage {
	__typename: "StaffImage" | undefined
	/**
	 * The person's image of media at its largest size
	 */
	large?: Maybe<ScalarsEnums["String"]>
	/**
	 * The person's image of media at medium size
	 */
	medium?: Maybe<ScalarsEnums["String"]>
}

/**
 * Voice actor role for a character
 */
export interface StaffRoleType {
	__typename: "StaffRoleType" | undefined
	/**
	 * The voice actors of the character
	 */
	voiceActor?: Maybe<Staff>
	/**
	 * Notes regarding the VA's role for the character
	 */
	roleNotes?: Maybe<ScalarsEnums["String"]>
	/**
	 * Used for grouping roles where multiple dubs exist for the same language. Either dubbing company name or language variant.
	 */
	dubGroup?: Maybe<ScalarsEnums["String"]>
}

export interface StaffConnection {
	__typename: "StaffConnection" | undefined
	edges?: Maybe<Array<Maybe<StaffEdge>>>
	nodes?: Maybe<Array<Maybe<Staff>>>
	/**
	 * The pagination information
	 */
	pageInfo?: Maybe<PageInfo>
}

/**
 * Staff connection edge
 */
export interface StaffEdge {
	__typename: "StaffEdge" | undefined
	node?: Maybe<Staff>
	/**
	 * The id of the connection
	 */
	id?: Maybe<ScalarsEnums["Int"]>
	/**
	 * The role of the staff member in the production of the media
	 */
	role?: Maybe<ScalarsEnums["String"]>
	/**
	 * The order the staff should be displayed from the users favourites
	 */
	favouriteOrder?: Maybe<ScalarsEnums["Int"]>
}

export interface StudioConnection {
	__typename: "StudioConnection" | undefined
	edges?: Maybe<Array<Maybe<StudioEdge>>>
	nodes?: Maybe<Array<Maybe<Studio>>>
	/**
	 * The pagination information
	 */
	pageInfo?: Maybe<PageInfo>
}

/**
 * Studio connection edge
 */
export interface StudioEdge {
	__typename: "StudioEdge" | undefined
	node?: Maybe<Studio>
	/**
	 * The id of the connection
	 */
	id?: Maybe<ScalarsEnums["Int"]>
	/**
	 * If the studio is the main animation studio of the anime
	 */
	isMain: ScalarsEnums["Boolean"]
	/**
	 * The order the character should be displayed from the users favourites
	 */
	favouriteOrder?: Maybe<ScalarsEnums["Int"]>
}

/**
 * Animation or production company
 */
export interface Studio {
	__typename: "Studio" | undefined
	/**
	 * The id of the studio
	 */
	id: ScalarsEnums["Int"]
	/**
	 * The name of the studio
	 */
	name: ScalarsEnums["String"]
	/**
	 * If the studio is an animation studio or a different kind of company
	 */
	isAnimationStudio: ScalarsEnums["Boolean"]
	/**
	 * The media the studio has worked on
	 */
	media: (args?: {
		/**
		 * The order the results will be returned in
		 */
		sort?: Maybe<Array<Maybe<MediaSort>>>
		/**
		 * If the studio was the primary animation studio of the media
		 */
		isMain?: Maybe<Scalars["Boolean"]>
		onList?: Maybe<Scalars["Boolean"]>
		/**
		 * The page
		 */
		page?: Maybe<Scalars["Int"]>
		/**
		 * The amount of entries per page, max 25
		 */
		perPage?: Maybe<Scalars["Int"]>
	}) => Maybe<MediaConnection>
	/**
	 * The url for the studio page on the AniList website
	 */
	siteUrl?: Maybe<ScalarsEnums["String"]>
	/**
	 * If the studio is marked as favourite by the currently authenticated user
	 */
	isFavourite: ScalarsEnums["Boolean"]
	/**
	 * The amount of user's who have favourited the studio
	 */
	favourites?: Maybe<ScalarsEnums["Int"]>
}

/**
 * Media Airing Schedule. NOTE: We only aim to guarantee that FUTURE airing data is present and accurate.
 */
export interface AiringSchedule {
	__typename: "AiringSchedule" | undefined
	/**
	 * The id of the airing schedule item
	 */
	id: ScalarsEnums["Int"]
	/**
	 * The time the episode airs at
	 */
	airingAt: ScalarsEnums["Int"]
	/**
	 * Seconds until episode starts airing
	 */
	timeUntilAiring: ScalarsEnums["Int"]
	/**
	 * The airing episode number
	 */
	episode: ScalarsEnums["Int"]
	/**
	 * The associate media id of the airing episode
	 */
	mediaId: ScalarsEnums["Int"]
	/**
	 * The associate media of the airing episode
	 */
	media?: Maybe<Media>
}

export interface AiringScheduleConnection {
	__typename: "AiringScheduleConnection" | undefined
	edges?: Maybe<Array<Maybe<AiringScheduleEdge>>>
	nodes?: Maybe<Array<Maybe<AiringSchedule>>>
	/**
	 * The pagination information
	 */
	pageInfo?: Maybe<PageInfo>
}

/**
 * AiringSchedule connection edge
 */
export interface AiringScheduleEdge {
	__typename: "AiringScheduleEdge" | undefined
	node?: Maybe<AiringSchedule>
	/**
	 * The id of the connection
	 */
	id?: Maybe<ScalarsEnums["Int"]>
}

export interface MediaTrendConnection {
	__typename: "MediaTrendConnection" | undefined
	edges?: Maybe<Array<Maybe<MediaTrendEdge>>>
	nodes?: Maybe<Array<Maybe<MediaTrend>>>
	/**
	 * The pagination information
	 */
	pageInfo?: Maybe<PageInfo>
}

/**
 * Media trend connection edge
 */
export interface MediaTrendEdge {
	__typename: "MediaTrendEdge" | undefined
	node?: Maybe<MediaTrend>
}

/**
 * Daily media statistics
 */
export interface MediaTrend {
	__typename: "MediaTrend" | undefined
	/**
	 * The id of the tag
	 */
	mediaId: ScalarsEnums["Int"]
	/**
	 * The day the data was recorded (timestamp)
	 */
	date: ScalarsEnums["Int"]
	/**
	 * The amount of media activity on the day
	 */
	trending: ScalarsEnums["Int"]
	/**
	 * A weighted average score of all the user's scores of the media
	 */
	averageScore?: Maybe<ScalarsEnums["Int"]>
	/**
	 * The number of users with the media on their list
	 */
	popularity?: Maybe<ScalarsEnums["Int"]>
	/**
	 * The number of users with watching/reading the media
	 */
	inProgress?: Maybe<ScalarsEnums["Int"]>
	/**
	 * If the media was being released at this time
	 */
	releasing: ScalarsEnums["Boolean"]
	/**
	 * The episode number of the anime released on this day
	 */
	episode?: Maybe<ScalarsEnums["Int"]>
	/**
	 * The related media
	 */
	media?: Maybe<Media>
}

/**
 * An external link to another site related to the media
 */
export interface MediaExternalLink {
	__typename: "MediaExternalLink" | undefined
	/**
	 * The id of the external link
	 */
	id: ScalarsEnums["Int"]
	/**
	 * The url of the external link
	 */
	url: ScalarsEnums["String"]
	/**
	 * The site location of the external link
	 */
	site: ScalarsEnums["String"]
}

/**
 * Data and links to legal streaming episodes on external sites
 */
export interface MediaStreamingEpisode {
	__typename: "MediaStreamingEpisode" | undefined
	/**
	 * Title of the episode
	 */
	title?: Maybe<ScalarsEnums["String"]>
	/**
	 * Url of episode image thumbnail
	 */
	thumbnail?: Maybe<ScalarsEnums["String"]>
	/**
	 * The url of the episode
	 */
	url?: Maybe<ScalarsEnums["String"]>
	/**
	 * The site location of the streaming episodes
	 */
	site?: Maybe<ScalarsEnums["String"]>
}

/**
 * The ranking of a media in a particular time span and format compared to other media
 */
export interface MediaRank {
	__typename: "MediaRank" | undefined
	/**
	 * The id of the rank
	 */
	id: ScalarsEnums["Int"]
	/**
	 * The numerical rank of the media
	 */
	rank: ScalarsEnums["Int"]
	/**
	 * The type of ranking
	 */
	type: ScalarsEnums["MediaRankType"]
	/**
	 * The format the media is ranked within
	 */
	format: ScalarsEnums["MediaFormat"]
	/**
	 * The year the media is ranked within
	 */
	year?: Maybe<ScalarsEnums["Int"]>
	/**
	 * The season the media is ranked within
	 */
	season?: Maybe<ScalarsEnums["MediaSeason"]>
	/**
	 * If the ranking is based on all time instead of a season/year
	 */
	allTime?: Maybe<ScalarsEnums["Boolean"]>
	/**
	 * String that gives context to the ranking type and time span
	 */
	context: ScalarsEnums["String"]
}

/**
 * List of anime or manga
 */
export interface MediaList {
	__typename: "MediaList" | undefined
	/**
	 * The id of the list entry
	 */
	id: ScalarsEnums["Int"]
	/**
	 * The id of the user owner of the list entry
	 */
	userId: ScalarsEnums["Int"]
	/**
	 * The id of the media
	 */
	mediaId: ScalarsEnums["Int"]
	/**
	 * The watching/reading status
	 */
	status?: Maybe<ScalarsEnums["MediaListStatus"]>
	/**
	 * The score of the entry
	 */
	score: (args?: {
		/**
		 * Force the score to be returned in the provided format type.
		 */
		format?: Maybe<ScoreFormat>
	}) => Maybe<ScalarsEnums["Float"]>
	/**
	 * The amount of episodes/chapters consumed by the user
	 */
	progress?: Maybe<ScalarsEnums["Int"]>
	/**
	 * The amount of volumes read by the user
	 */
	progressVolumes?: Maybe<ScalarsEnums["Int"]>
	/**
	 * The amount of times the user has rewatched/read the media
	 */
	repeat?: Maybe<ScalarsEnums["Int"]>
	/**
	 * Priority of planning
	 */
	priority?: Maybe<ScalarsEnums["Int"]>
	/**
	 * If the entry should only be visible to authenticated user
	 */
	private?: Maybe<ScalarsEnums["Boolean"]>
	/**
	 * Text notes
	 */
	notes?: Maybe<ScalarsEnums["String"]>
	/**
	 * If the entry shown be hidden from non-custom lists
	 */
	hiddenFromStatusLists?: Maybe<ScalarsEnums["Boolean"]>
	/**
	 * Map of booleans for which custom lists the entry are in
	 */
	customLists: (args?: {
		/**
		 * Change return structure to an array of objects
		 */
		asArray?: Maybe<Scalars["Boolean"]>
	}) => Maybe<ScalarsEnums["Json"]>
	/**
	 * Map of advanced scores with name keys
	 */
	advancedScores?: Maybe<ScalarsEnums["Json"]>
	/**
	 * When the entry was started by the user
	 */
	startedAt?: Maybe<FuzzyDate>
	/**
	 * When the entry was completed by the user
	 */
	completedAt?: Maybe<FuzzyDate>
	/**
	 * When the entry data was last updated
	 */
	updatedAt?: Maybe<ScalarsEnums["Int"]>
	/**
	 * When the entry data was created
	 */
	createdAt?: Maybe<ScalarsEnums["Int"]>
	media?: Maybe<Media>
	user?: Maybe<User>
}

export interface ReviewConnection {
	__typename: "ReviewConnection" | undefined
	edges?: Maybe<Array<Maybe<ReviewEdge>>>
	nodes?: Maybe<Array<Maybe<Review>>>
	/**
	 * The pagination information
	 */
	pageInfo?: Maybe<PageInfo>
}

/**
 * Review connection edge
 */
export interface ReviewEdge {
	__typename: "ReviewEdge" | undefined
	node?: Maybe<Review>
}

/**
 * A Review that features in an anime or manga
 */
export interface Review {
	__typename: "Review" | undefined
	/**
	 * The id of the review
	 */
	id: ScalarsEnums["Int"]
	/**
	 * The id of the review's creator
	 */
	userId: ScalarsEnums["Int"]
	/**
	 * The id of the review's media
	 */
	mediaId: ScalarsEnums["Int"]
	/**
	 * For which type of media the review is for
	 */
	mediaType?: Maybe<ScalarsEnums["MediaType"]>
	/**
	 * A short summary of the review
	 */
	summary?: Maybe<ScalarsEnums["String"]>
	/**
	 * The main review body text
	 */
	body: (args?: {
		/**
		 * Return the string in pre-parsed html instead of markdown
		 */
		asHtml?: Maybe<Scalars["Boolean"]>
	}) => Maybe<ScalarsEnums["String"]>
	/**
	 * The total user rating of the review
	 */
	rating?: Maybe<ScalarsEnums["Int"]>
	/**
	 * The amount of user ratings of the review
	 */
	ratingAmount?: Maybe<ScalarsEnums["Int"]>
	/**
	 * The rating of the review by currently authenticated user
	 */
	userRating?: Maybe<ScalarsEnums["ReviewRating"]>
	/**
	 * The review score of the media
	 */
	score?: Maybe<ScalarsEnums["Int"]>
	/**
	 * If the review is not yet publicly published and is only viewable by creator
	 */
	private?: Maybe<ScalarsEnums["Boolean"]>
	/**
	 * The url for the review page on the AniList website
	 */
	siteUrl?: Maybe<ScalarsEnums["String"]>
	/**
	 * The time of the thread creation
	 */
	createdAt: ScalarsEnums["Int"]
	/**
	 * The time of the thread last update
	 */
	updatedAt: ScalarsEnums["Int"]
	/**
	 * The creator of the review
	 */
	user?: Maybe<User>
	/**
	 * The media the review is of
	 */
	media?: Maybe<Media>
}

export interface RecommendationConnection {
	__typename: "RecommendationConnection" | undefined
	edges?: Maybe<Array<Maybe<RecommendationEdge>>>
	nodes?: Maybe<Array<Maybe<Recommendation>>>
	/**
	 * The pagination information
	 */
	pageInfo?: Maybe<PageInfo>
}

/**
 * Recommendation connection edge
 */
export interface RecommendationEdge {
	__typename: "RecommendationEdge" | undefined
	node?: Maybe<Recommendation>
}

/**
 * Media recommendation
 */
export interface Recommendation {
	__typename: "Recommendation" | undefined
	/**
	 * The id of the recommendation
	 */
	id: ScalarsEnums["Int"]
	/**
	 * Users rating of the recommendation
	 */
	rating?: Maybe<ScalarsEnums["Int"]>
	/**
	 * The rating of the recommendation by currently authenticated user
	 */
	userRating?: Maybe<ScalarsEnums["RecommendationRating"]>
	/**
	 * The media the recommendation is from
	 */
	media?: Maybe<Media>
	/**
	 * The recommended media
	 */
	mediaRecommendation?: Maybe<Media>
	/**
	 * The user that first created the recommendation
	 */
	user?: Maybe<User>
}

/**
 * A media's statistics
 */
export interface MediaStats {
	__typename: "MediaStats" | undefined
	scoreDistribution?: Maybe<Array<Maybe<ScoreDistribution>>>
	statusDistribution?: Maybe<Array<Maybe<StatusDistribution>>>
	/**
	 * @deprecated Replaced by MediaTrends
	 */
	airingProgression?: Maybe<Array<Maybe<AiringProgression>>>
}

/**
 * A user's list score distribution.
 */
export interface ScoreDistribution {
	__typename: "ScoreDistribution" | undefined
	score?: Maybe<ScalarsEnums["Int"]>
	/**
	 * The amount of list entries with this score
	 */
	amount?: Maybe<ScalarsEnums["Int"]>
}

/**
 * The distribution of the watching/reading status of media or a user's list
 */
export interface StatusDistribution {
	__typename: "StatusDistribution" | undefined
	/**
	 * The day the activity took place (Unix timestamp)
	 */
	status?: Maybe<ScalarsEnums["MediaListStatus"]>
	/**
	 * The amount of entries with this status
	 */
	amount?: Maybe<ScalarsEnums["Int"]>
}

/**
 * Score & Watcher stats for airing anime by episode and mid-week
 */
export interface AiringProgression {
	__typename: "AiringProgression" | undefined
	/**
	 * The episode the stats were recorded at. .5 is the mid point between 2 episodes airing dates.
	 */
	episode?: Maybe<ScalarsEnums["Float"]>
	/**
	 * The average score for the media
	 */
	score?: Maybe<ScalarsEnums["Float"]>
	/**
	 * The amount of users watching the anime
	 */
	watching?: Maybe<ScalarsEnums["Int"]>
}

export interface UserStatisticTypes {
	__typename: "UserStatisticTypes" | undefined
	anime?: Maybe<UserStatistics>
	manga?: Maybe<UserStatistics>
}

export interface UserStatistics {
	__typename: "UserStatistics" | undefined
	count: ScalarsEnums["Int"]
	meanScore: ScalarsEnums["Float"]
	standardDeviation: ScalarsEnums["Float"]
	minutesWatched: ScalarsEnums["Int"]
	episodesWatched: ScalarsEnums["Int"]
	chaptersRead: ScalarsEnums["Int"]
	volumesRead: ScalarsEnums["Int"]
	formats: (args?: {
		limit?: Maybe<Scalars["Int"]>
		sort?: Maybe<Array<Maybe<UserStatisticsSort>>>
	}) => Maybe<Array<Maybe<UserFormatStatistic>>>
	statuses: (args?: {
		limit?: Maybe<Scalars["Int"]>
		sort?: Maybe<Array<Maybe<UserStatisticsSort>>>
	}) => Maybe<Array<Maybe<UserStatusStatistic>>>
	scores: (args?: {
		limit?: Maybe<Scalars["Int"]>
		sort?: Maybe<Array<Maybe<UserStatisticsSort>>>
	}) => Maybe<Array<Maybe<UserScoreStatistic>>>
	lengths: (args?: {
		limit?: Maybe<Scalars["Int"]>
		sort?: Maybe<Array<Maybe<UserStatisticsSort>>>
	}) => Maybe<Array<Maybe<UserLengthStatistic>>>
	releaseYears: (args?: {
		limit?: Maybe<Scalars["Int"]>
		sort?: Maybe<Array<Maybe<UserStatisticsSort>>>
	}) => Maybe<Array<Maybe<UserReleaseYearStatistic>>>
	startYears: (args?: {
		limit?: Maybe<Scalars["Int"]>
		sort?: Maybe<Array<Maybe<UserStatisticsSort>>>
	}) => Maybe<Array<Maybe<UserStartYearStatistic>>>
	genres: (args?: {
		limit?: Maybe<Scalars["Int"]>
		sort?: Maybe<Array<Maybe<UserStatisticsSort>>>
	}) => Maybe<Array<Maybe<UserGenreStatistic>>>
	tags: (args?: {
		limit?: Maybe<Scalars["Int"]>
		sort?: Maybe<Array<Maybe<UserStatisticsSort>>>
	}) => Maybe<Array<Maybe<UserTagStatistic>>>
	countries: (args?: {
		limit?: Maybe<Scalars["Int"]>
		sort?: Maybe<Array<Maybe<UserStatisticsSort>>>
	}) => Maybe<Array<Maybe<UserCountryStatistic>>>
	voiceActors: (args?: {
		limit?: Maybe<Scalars["Int"]>
		sort?: Maybe<Array<Maybe<UserStatisticsSort>>>
	}) => Maybe<Array<Maybe<UserVoiceActorStatistic>>>
	staff: (args?: {
		limit?: Maybe<Scalars["Int"]>
		sort?: Maybe<Array<Maybe<UserStatisticsSort>>>
	}) => Maybe<Array<Maybe<UserStaffStatistic>>>
	studios: (args?: {
		limit?: Maybe<Scalars["Int"]>
		sort?: Maybe<Array<Maybe<UserStatisticsSort>>>
	}) => Maybe<Array<Maybe<UserStudioStatistic>>>
}

export interface UserFormatStatistic {
	__typename: "UserFormatStatistic" | undefined
	count: ScalarsEnums["Int"]
	meanScore: ScalarsEnums["Float"]
	minutesWatched: ScalarsEnums["Int"]
	chaptersRead: ScalarsEnums["Int"]
	mediaIds: Array<Maybe<ScalarsEnums["Int"]>>
	format?: Maybe<ScalarsEnums["MediaFormat"]>
}

export interface UserStatusStatistic {
	__typename: "UserStatusStatistic" | undefined
	count: ScalarsEnums["Int"]
	meanScore: ScalarsEnums["Float"]
	minutesWatched: ScalarsEnums["Int"]
	chaptersRead: ScalarsEnums["Int"]
	mediaIds: Array<Maybe<ScalarsEnums["Int"]>>
	status?: Maybe<ScalarsEnums["MediaListStatus"]>
}

export interface UserScoreStatistic {
	__typename: "UserScoreStatistic" | undefined
	count: ScalarsEnums["Int"]
	meanScore: ScalarsEnums["Float"]
	minutesWatched: ScalarsEnums["Int"]
	chaptersRead: ScalarsEnums["Int"]
	mediaIds: Array<Maybe<ScalarsEnums["Int"]>>
	score?: Maybe<ScalarsEnums["Int"]>
}

export interface UserLengthStatistic {
	__typename: "UserLengthStatistic" | undefined
	count: ScalarsEnums["Int"]
	meanScore: ScalarsEnums["Float"]
	minutesWatched: ScalarsEnums["Int"]
	chaptersRead: ScalarsEnums["Int"]
	mediaIds: Array<Maybe<ScalarsEnums["Int"]>>
	length?: Maybe<ScalarsEnums["String"]>
}

export interface UserReleaseYearStatistic {
	__typename: "UserReleaseYearStatistic" | undefined
	count: ScalarsEnums["Int"]
	meanScore: ScalarsEnums["Float"]
	minutesWatched: ScalarsEnums["Int"]
	chaptersRead: ScalarsEnums["Int"]
	mediaIds: Array<Maybe<ScalarsEnums["Int"]>>
	releaseYear?: Maybe<ScalarsEnums["Int"]>
}

export interface UserStartYearStatistic {
	__typename: "UserStartYearStatistic" | undefined
	count: ScalarsEnums["Int"]
	meanScore: ScalarsEnums["Float"]
	minutesWatched: ScalarsEnums["Int"]
	chaptersRead: ScalarsEnums["Int"]
	mediaIds: Array<Maybe<ScalarsEnums["Int"]>>
	startYear?: Maybe<ScalarsEnums["Int"]>
}

export interface UserGenreStatistic {
	__typename: "UserGenreStatistic" | undefined
	count: ScalarsEnums["Int"]
	meanScore: ScalarsEnums["Float"]
	minutesWatched: ScalarsEnums["Int"]
	chaptersRead: ScalarsEnums["Int"]
	mediaIds: Array<Maybe<ScalarsEnums["Int"]>>
	genre?: Maybe<ScalarsEnums["String"]>
}

export interface UserTagStatistic {
	__typename: "UserTagStatistic" | undefined
	count: ScalarsEnums["Int"]
	meanScore: ScalarsEnums["Float"]
	minutesWatched: ScalarsEnums["Int"]
	chaptersRead: ScalarsEnums["Int"]
	mediaIds: Array<Maybe<ScalarsEnums["Int"]>>
	tag?: Maybe<MediaTag>
}

export interface UserCountryStatistic {
	__typename: "UserCountryStatistic" | undefined
	count: ScalarsEnums["Int"]
	meanScore: ScalarsEnums["Float"]
	minutesWatched: ScalarsEnums["Int"]
	chaptersRead: ScalarsEnums["Int"]
	mediaIds: Array<Maybe<ScalarsEnums["Int"]>>
	country?: Maybe<ScalarsEnums["CountryCode"]>
}

export interface UserVoiceActorStatistic {
	__typename: "UserVoiceActorStatistic" | undefined
	count: ScalarsEnums["Int"]
	meanScore: ScalarsEnums["Float"]
	minutesWatched: ScalarsEnums["Int"]
	chaptersRead: ScalarsEnums["Int"]
	mediaIds: Array<Maybe<ScalarsEnums["Int"]>>
	voiceActor?: Maybe<Staff>
	characterIds: Array<Maybe<ScalarsEnums["Int"]>>
}

export interface UserStaffStatistic {
	__typename: "UserStaffStatistic" | undefined
	count: ScalarsEnums["Int"]
	meanScore: ScalarsEnums["Float"]
	minutesWatched: ScalarsEnums["Int"]
	chaptersRead: ScalarsEnums["Int"]
	mediaIds: Array<Maybe<ScalarsEnums["Int"]>>
	staff?: Maybe<Staff>
}

export interface UserStudioStatistic {
	__typename: "UserStudioStatistic" | undefined
	count: ScalarsEnums["Int"]
	meanScore: ScalarsEnums["Float"]
	minutesWatched: ScalarsEnums["Int"]
	chaptersRead: ScalarsEnums["Int"]
	mediaIds: Array<Maybe<ScalarsEnums["Int"]>>
	studio?: Maybe<Studio>
}

/**
 * A user's statistics
 */
export interface UserStats {
	__typename: "UserStats" | undefined
	/**
	 * The amount of anime the user has watched in minutes
	 */
	watchedTime?: Maybe<ScalarsEnums["Int"]>
	/**
	 * The amount of manga chapters the user has read
	 */
	chaptersRead?: Maybe<ScalarsEnums["Int"]>
	activityHistory?: Maybe<Array<Maybe<UserActivityHistory>>>
	animeStatusDistribution?: Maybe<Array<Maybe<StatusDistribution>>>
	mangaStatusDistribution?: Maybe<Array<Maybe<StatusDistribution>>>
	animeScoreDistribution?: Maybe<Array<Maybe<ScoreDistribution>>>
	mangaScoreDistribution?: Maybe<Array<Maybe<ScoreDistribution>>>
	animeListScores?: Maybe<ListScoreStats>
	mangaListScores?: Maybe<ListScoreStats>
	favouredGenresOverview?: Maybe<Array<Maybe<GenreStats>>>
	favouredGenres?: Maybe<Array<Maybe<GenreStats>>>
	favouredTags?: Maybe<Array<Maybe<TagStats>>>
	favouredActors?: Maybe<Array<Maybe<StaffStats>>>
	favouredStaff?: Maybe<Array<Maybe<StaffStats>>>
	favouredStudios?: Maybe<Array<Maybe<StudioStats>>>
	favouredYears?: Maybe<Array<Maybe<YearStats>>>
	favouredFormats?: Maybe<Array<Maybe<FormatStats>>>
}

/**
 * A user's activity history stats.
 */
export interface UserActivityHistory {
	__typename: "UserActivityHistory" | undefined
	/**
	 * The day the activity took place (Unix timestamp)
	 */
	date?: Maybe<ScalarsEnums["Int"]>
	/**
	 * The amount of activity on the day
	 */
	amount?: Maybe<ScalarsEnums["Int"]>
	/**
	 * The level of activity represented on a 1-10 scale
	 */
	level?: Maybe<ScalarsEnums["Int"]>
}

/**
 * User's list score statistics
 */
export interface ListScoreStats {
	__typename: "ListScoreStats" | undefined
	meanScore?: Maybe<ScalarsEnums["Int"]>
	standardDeviation?: Maybe<ScalarsEnums["Int"]>
}

/**
 * User's genre statistics
 */
export interface GenreStats {
	__typename: "GenreStats" | undefined
	genre?: Maybe<ScalarsEnums["String"]>
	amount?: Maybe<ScalarsEnums["Int"]>
	meanScore?: Maybe<ScalarsEnums["Int"]>
	/**
	 * The amount of time in minutes the genre has been watched by the user
	 */
	timeWatched?: Maybe<ScalarsEnums["Int"]>
}

/**
 * User's tag statistics
 */
export interface TagStats {
	__typename: "TagStats" | undefined
	tag?: Maybe<MediaTag>
	amount?: Maybe<ScalarsEnums["Int"]>
	meanScore?: Maybe<ScalarsEnums["Int"]>
	/**
	 * The amount of time in minutes the tag has been watched by the user
	 */
	timeWatched?: Maybe<ScalarsEnums["Int"]>
}

/**
 * User's staff statistics
 */
export interface StaffStats {
	__typename: "StaffStats" | undefined
	staff?: Maybe<Staff>
	amount?: Maybe<ScalarsEnums["Int"]>
	meanScore?: Maybe<ScalarsEnums["Int"]>
	/**
	 * The amount of time in minutes the staff member has been watched by the user
	 */
	timeWatched?: Maybe<ScalarsEnums["Int"]>
}

/**
 * User's studio statistics
 */
export interface StudioStats {
	__typename: "StudioStats" | undefined
	studio?: Maybe<Studio>
	amount?: Maybe<ScalarsEnums["Int"]>
	meanScore?: Maybe<ScalarsEnums["Int"]>
	/**
	 * The amount of time in minutes the studio's works have been watched by the user
	 */
	timeWatched?: Maybe<ScalarsEnums["Int"]>
}

/**
 * User's year statistics
 */
export interface YearStats {
	__typename: "YearStats" | undefined
	year?: Maybe<ScalarsEnums["Int"]>
	amount?: Maybe<ScalarsEnums["Int"]>
	meanScore?: Maybe<ScalarsEnums["Int"]>
}

/**
 * User's format statistics
 */
export interface FormatStats {
	__typename: "FormatStats" | undefined
	format?: Maybe<ScalarsEnums["MediaFormat"]>
	amount?: Maybe<ScalarsEnums["Int"]>
}

/**
 * Notification for when an episode of anime airs
 */
export interface AiringNotification {
	__typename: "AiringNotification" | undefined
	/**
	 * The id of the Notification
	 */
	id: ScalarsEnums["Int"]
	/**
	 * The type of notification
	 */
	type?: Maybe<ScalarsEnums["NotificationType"]>
	/**
	 * The id of the aired anime
	 */
	animeId: ScalarsEnums["Int"]
	/**
	 * The episode number that just aired
	 */
	episode: ScalarsEnums["Int"]
	/**
	 * The notification context text
	 */
	contexts?: Maybe<Array<Maybe<ScalarsEnums["String"]>>>
	/**
	 * The time the notification was created at
	 */
	createdAt?: Maybe<ScalarsEnums["Int"]>
	/**
	 * The associated media of the airing schedule
	 */
	media?: Maybe<Media>
}

/**
 * Notification for when the authenticated user is followed by another user
 */
export interface FollowingNotification {
	__typename: "FollowingNotification" | undefined
	/**
	 * The id of the Notification
	 */
	id: ScalarsEnums["Int"]
	/**
	 * The id of the user who followed the authenticated user
	 */
	userId: ScalarsEnums["Int"]
	/**
	 * The type of notification
	 */
	type?: Maybe<ScalarsEnums["NotificationType"]>
	/**
	 * The notification context text
	 */
	context?: Maybe<ScalarsEnums["String"]>
	/**
	 * The time the notification was created at
	 */
	createdAt?: Maybe<ScalarsEnums["Int"]>
	/**
	 * The liked activity
	 */
	user?: Maybe<User>
}

/**
 * Notification for when a user is send an activity message
 */
export interface ActivityMessageNotification {
	__typename: "ActivityMessageNotification" | undefined
	/**
	 * The id of the Notification
	 */
	id: ScalarsEnums["Int"]
	/**
	 * The if of the user who send the message
	 */
	userId: ScalarsEnums["Int"]
	/**
	 * The type of notification
	 */
	type?: Maybe<ScalarsEnums["NotificationType"]>
	/**
	 * The id of the activity message
	 */
	activityId: ScalarsEnums["Int"]
	/**
	 * The notification context text
	 */
	context?: Maybe<ScalarsEnums["String"]>
	/**
	 * The time the notification was created at
	 */
	createdAt?: Maybe<ScalarsEnums["Int"]>
	/**
	 * The message activity
	 */
	message?: Maybe<MessageActivity>
	/**
	 * The user who sent the message
	 */
	user?: Maybe<User>
}

/**
 * User message activity
 */
export interface MessageActivity {
	__typename: "MessageActivity" | undefined
	/**
	 * The id of the activity
	 */
	id: ScalarsEnums["Int"]
	/**
	 * The user id of the activity's recipient
	 */
	recipientId?: Maybe<ScalarsEnums["Int"]>
	/**
	 * The user id of the activity's sender
	 */
	messengerId?: Maybe<ScalarsEnums["Int"]>
	/**
	 * The type of the activity
	 */
	type?: Maybe<ScalarsEnums["ActivityType"]>
	/**
	 * The number of activity replies
	 */
	replyCount: ScalarsEnums["Int"]
	/**
	 * The message text (Markdown)
	 */
	message: (args?: {
		/**
		 * Return the string in pre-parsed html instead of markdown
		 */
		asHtml?: Maybe<Scalars["Boolean"]>
	}) => Maybe<ScalarsEnums["String"]>
	/**
	 * If the activity is locked and can receive replies
	 */
	isLocked?: Maybe<ScalarsEnums["Boolean"]>
	/**
	 * If the currently authenticated user is subscribed to the activity
	 */
	isSubscribed?: Maybe<ScalarsEnums["Boolean"]>
	/**
	 * The amount of likes the activity has
	 */
	likeCount: ScalarsEnums["Int"]
	/**
	 * If the currently authenticated user liked the activity
	 */
	isLiked?: Maybe<ScalarsEnums["Boolean"]>
	/**
	 * If the message is private and only viewable to the sender and recipients
	 */
	isPrivate?: Maybe<ScalarsEnums["Boolean"]>
	/**
	 * The url for the activity page on the AniList website
	 */
	siteUrl?: Maybe<ScalarsEnums["String"]>
	/**
	 * The time the activity was created at
	 */
	createdAt: ScalarsEnums["Int"]
	/**
	 * The user who the activity message was sent to
	 */
	recipient?: Maybe<User>
	/**
	 * The user who sent the activity message
	 */
	messenger?: Maybe<User>
	/**
	 * The written replies to the activity
	 */
	replies?: Maybe<Array<Maybe<ActivityReply>>>
	/**
	 * The users who liked the activity
	 */
	likes?: Maybe<Array<Maybe<User>>>
}

/**
 * Replay to an activity item
 */
export interface ActivityReply {
	__typename: "ActivityReply" | undefined
	/**
	 * The id of the reply
	 */
	id: ScalarsEnums["Int"]
	/**
	 * The id of the replies creator
	 */
	userId?: Maybe<ScalarsEnums["Int"]>
	/**
	 * The id of the parent activity
	 */
	activityId?: Maybe<ScalarsEnums["Int"]>
	/**
	 * The reply text
	 */
	text: (args?: {
		/**
		 * Return the string in pre-parsed html instead of markdown
		 */
		asHtml?: Maybe<Scalars["Boolean"]>
	}) => Maybe<ScalarsEnums["String"]>
	/**
	 * The amount of likes the reply has
	 */
	likeCount: ScalarsEnums["Int"]
	/**
	 * If the currently authenticated user liked the reply
	 */
	isLiked?: Maybe<ScalarsEnums["Boolean"]>
	/**
	 * The time the reply was created at
	 */
	createdAt: ScalarsEnums["Int"]
	/**
	 * The user who created reply
	 */
	user?: Maybe<User>
	/**
	 * The users who liked the reply
	 */
	likes?: Maybe<Array<Maybe<User>>>
}

/**
 * Notification for when authenticated user is @ mentioned in activity or reply
 */
export interface ActivityMentionNotification {
	__typename: "ActivityMentionNotification" | undefined
	/**
	 * The id of the Notification
	 */
	id: ScalarsEnums["Int"]
	/**
	 * The id of the user who mentioned the authenticated user
	 */
	userId: ScalarsEnums["Int"]
	/**
	 * The type of notification
	 */
	type?: Maybe<ScalarsEnums["NotificationType"]>
	/**
	 * The id of the activity where mentioned
	 */
	activityId: ScalarsEnums["Int"]
	/**
	 * The notification context text
	 */
	context?: Maybe<ScalarsEnums["String"]>
	/**
	 * The time the notification was created at
	 */
	createdAt?: Maybe<ScalarsEnums["Int"]>
	/**
	 * The liked activity
	 */
	activity?: Maybe<ActivityUnion>
	/**
	 * The user who mentioned the authenticated user
	 */
	user?: Maybe<User>
}

/**
 * User text activity
 */
export interface TextActivity {
	__typename: "TextActivity" | undefined
	/**
	 * The id of the activity
	 */
	id: ScalarsEnums["Int"]
	/**
	 * The user id of the activity's creator
	 */
	userId?: Maybe<ScalarsEnums["Int"]>
	/**
	 * The type of activity
	 */
	type?: Maybe<ScalarsEnums["ActivityType"]>
	/**
	 * The number of activity replies
	 */
	replyCount: ScalarsEnums["Int"]
	/**
	 * The status text (Markdown)
	 */
	text: (args?: {
		/**
		 * Return the string in pre-parsed html instead of markdown
		 */
		asHtml?: Maybe<Scalars["Boolean"]>
	}) => Maybe<ScalarsEnums["String"]>
	/**
	 * The url for the activity page on the AniList website
	 */
	siteUrl?: Maybe<ScalarsEnums["String"]>
	/**
	 * If the activity is locked and can receive replies
	 */
	isLocked?: Maybe<ScalarsEnums["Boolean"]>
	/**
	 * If the currently authenticated user is subscribed to the activity
	 */
	isSubscribed?: Maybe<ScalarsEnums["Boolean"]>
	/**
	 * The amount of likes the activity has
	 */
	likeCount: ScalarsEnums["Int"]
	/**
	 * If the currently authenticated user liked the activity
	 */
	isLiked?: Maybe<ScalarsEnums["Boolean"]>
	/**
	 * The time the activity was created at
	 */
	createdAt: ScalarsEnums["Int"]
	/**
	 * The user who created the activity
	 */
	user?: Maybe<User>
	/**
	 * The written replies to the activity
	 */
	replies?: Maybe<Array<Maybe<ActivityReply>>>
	/**
	 * The users who liked the activity
	 */
	likes?: Maybe<Array<Maybe<User>>>
}

/**
 * User list activity (anime & manga updates)
 */
export interface ListActivity {
	__typename: "ListActivity" | undefined
	/**
	 * The id of the activity
	 */
	id: ScalarsEnums["Int"]
	/**
	 * The user id of the activity's creator
	 */
	userId?: Maybe<ScalarsEnums["Int"]>
	/**
	 * The type of activity
	 */
	type?: Maybe<ScalarsEnums["ActivityType"]>
	/**
	 * The number of activity replies
	 */
	replyCount: ScalarsEnums["Int"]
	/**
	 * The list item's textual status
	 */
	status?: Maybe<ScalarsEnums["String"]>
	/**
	 * The list progress made
	 */
	progress?: Maybe<ScalarsEnums["String"]>
	/**
	 * If the activity is locked and can receive replies
	 */
	isLocked?: Maybe<ScalarsEnums["Boolean"]>
	/**
	 * If the currently authenticated user is subscribed to the activity
	 */
	isSubscribed?: Maybe<ScalarsEnums["Boolean"]>
	/**
	 * The amount of likes the activity has
	 */
	likeCount: ScalarsEnums["Int"]
	/**
	 * If the currently authenticated user liked the activity
	 */
	isLiked?: Maybe<ScalarsEnums["Boolean"]>
	/**
	 * The url for the activity page on the AniList website
	 */
	siteUrl?: Maybe<ScalarsEnums["String"]>
	/**
	 * The time the activity was created at
	 */
	createdAt: ScalarsEnums["Int"]
	/**
	 * The owner of the activity
	 */
	user?: Maybe<User>
	/**
	 * The associated media to the activity update
	 */
	media?: Maybe<Media>
	/**
	 * The written replies to the activity
	 */
	replies?: Maybe<Array<Maybe<ActivityReply>>>
	/**
	 * The users who liked the activity
	 */
	likes?: Maybe<Array<Maybe<User>>>
}

/**
 * Notification for when a user replies to the authenticated users activity
 */
export interface ActivityReplyNotification {
	__typename: "ActivityReplyNotification" | undefined
	/**
	 * The id of the Notification
	 */
	id: ScalarsEnums["Int"]
	/**
	 * The id of the user who replied to the activity
	 */
	userId: ScalarsEnums["Int"]
	/**
	 * The type of notification
	 */
	type?: Maybe<ScalarsEnums["NotificationType"]>
	/**
	 * The id of the activity which was replied too
	 */
	activityId: ScalarsEnums["Int"]
	/**
	 * The notification context text
	 */
	context?: Maybe<ScalarsEnums["String"]>
	/**
	 * The time the notification was created at
	 */
	createdAt?: Maybe<ScalarsEnums["Int"]>
	/**
	 * The liked activity
	 */
	activity?: Maybe<ActivityUnion>
	/**
	 * The user who replied to the activity
	 */
	user?: Maybe<User>
}

/**
 * Notification for when a user replies to activity the authenticated user has replied to
 */
export interface ActivityReplySubscribedNotification {
	__typename: "ActivityReplySubscribedNotification" | undefined
	/**
	 * The id of the Notification
	 */
	id: ScalarsEnums["Int"]
	/**
	 * The id of the user who replied to the activity
	 */
	userId: ScalarsEnums["Int"]
	/**
	 * The type of notification
	 */
	type?: Maybe<ScalarsEnums["NotificationType"]>
	/**
	 * The id of the activity which was replied too
	 */
	activityId: ScalarsEnums["Int"]
	/**
	 * The notification context text
	 */
	context?: Maybe<ScalarsEnums["String"]>
	/**
	 * The time the notification was created at
	 */
	createdAt?: Maybe<ScalarsEnums["Int"]>
	/**
	 * The liked activity
	 */
	activity?: Maybe<ActivityUnion>
	/**
	 * The user who replied to the activity
	 */
	user?: Maybe<User>
}

/**
 * Notification for when a activity is liked
 */
export interface ActivityLikeNotification {
	__typename: "ActivityLikeNotification" | undefined
	/**
	 * The id of the Notification
	 */
	id: ScalarsEnums["Int"]
	/**
	 * The id of the user who liked to the activity
	 */
	userId: ScalarsEnums["Int"]
	/**
	 * The type of notification
	 */
	type?: Maybe<ScalarsEnums["NotificationType"]>
	/**
	 * The id of the activity which was liked
	 */
	activityId: ScalarsEnums["Int"]
	/**
	 * The notification context text
	 */
	context?: Maybe<ScalarsEnums["String"]>
	/**
	 * The time the notification was created at
	 */
	createdAt?: Maybe<ScalarsEnums["Int"]>
	/**
	 * The liked activity
	 */
	activity?: Maybe<ActivityUnion>
	/**
	 * The user who liked the activity
	 */
	user?: Maybe<User>
}

/**
 * Notification for when a activity reply is liked
 */
export interface ActivityReplyLikeNotification {
	__typename: "ActivityReplyLikeNotification" | undefined
	/**
	 * The id of the Notification
	 */
	id: ScalarsEnums["Int"]
	/**
	 * The id of the user who liked to the activity reply
	 */
	userId: ScalarsEnums["Int"]
	/**
	 * The type of notification
	 */
	type?: Maybe<ScalarsEnums["NotificationType"]>
	/**
	 * The id of the activity where the reply which was liked
	 */
	activityId: ScalarsEnums["Int"]
	/**
	 * The notification context text
	 */
	context?: Maybe<ScalarsEnums["String"]>
	/**
	 * The time the notification was created at
	 */
	createdAt?: Maybe<ScalarsEnums["Int"]>
	/**
	 * The liked activity
	 */
	activity?: Maybe<ActivityUnion>
	/**
	 * The user who liked the activity reply
	 */
	user?: Maybe<User>
}

/**
 * Notification for when authenticated user is @ mentioned in a forum thread comment
 */
export interface ThreadCommentMentionNotification {
	__typename: "ThreadCommentMentionNotification" | undefined
	/**
	 * The id of the Notification
	 */
	id: ScalarsEnums["Int"]
	/**
	 * The id of the user who mentioned the authenticated user
	 */
	userId: ScalarsEnums["Int"]
	/**
	 * The type of notification
	 */
	type?: Maybe<ScalarsEnums["NotificationType"]>
	/**
	 * The id of the comment where mentioned
	 */
	commentId: ScalarsEnums["Int"]
	/**
	 * The notification context text
	 */
	context?: Maybe<ScalarsEnums["String"]>
	/**
	 * The time the notification was created at
	 */
	createdAt?: Maybe<ScalarsEnums["Int"]>
	/**
	 * The thread that the relevant comment belongs to
	 */
	thread?: Maybe<Thread>
	/**
	 * The thread comment that included the @ mention
	 */
	comment?: Maybe<ThreadComment>
	/**
	 * The user who mentioned the authenticated user
	 */
	user?: Maybe<User>
}

/**
 * Forum Thread
 */
export interface Thread {
	__typename: "Thread" | undefined
	/**
	 * The id of the thread
	 */
	id: ScalarsEnums["Int"]
	/**
	 * The title of the thread
	 */
	title?: Maybe<ScalarsEnums["String"]>
	/**
	 * The text body of the thread (Markdown)
	 */
	body: (args?: {
		/**
		 * Return the string in pre-parsed html instead of markdown
		 */
		asHtml?: Maybe<Scalars["Boolean"]>
	}) => Maybe<ScalarsEnums["String"]>
	/**
	 * The id of the thread owner user
	 */
	userId: ScalarsEnums["Int"]
	/**
	 * The id of the user who most recently commented on the thread
	 */
	replyUserId?: Maybe<ScalarsEnums["Int"]>
	/**
	 * The id of the most recent comment on the thread
	 */
	replyCommentId?: Maybe<ScalarsEnums["Int"]>
	/**
	 * The number of comments on the thread
	 */
	replyCount?: Maybe<ScalarsEnums["Int"]>
	/**
	 * The number of times users have viewed the thread
	 */
	viewCount?: Maybe<ScalarsEnums["Int"]>
	/**
	 * If the thread is locked and can receive comments
	 */
	isLocked?: Maybe<ScalarsEnums["Boolean"]>
	/**
	 * If the thread is stickied and should be displayed at the top of the page
	 */
	isSticky?: Maybe<ScalarsEnums["Boolean"]>
	/**
	 * If the currently authenticated user is subscribed to the thread
	 */
	isSubscribed?: Maybe<ScalarsEnums["Boolean"]>
	/**
	 * The amount of likes the thread has
	 */
	likeCount: ScalarsEnums["Int"]
	/**
	 * If the currently authenticated user liked the thread
	 */
	isLiked?: Maybe<ScalarsEnums["Boolean"]>
	/**
	 * The time of the last reply
	 */
	repliedAt?: Maybe<ScalarsEnums["Int"]>
	/**
	 * The time of the thread creation
	 */
	createdAt: ScalarsEnums["Int"]
	/**
	 * The time of the thread last update
	 */
	updatedAt: ScalarsEnums["Int"]
	/**
	 * The owner of the thread
	 */
	user?: Maybe<User>
	/**
	 * The user to last reply to the thread
	 */
	replyUser?: Maybe<User>
	/**
	 * The users who liked the thread
	 */
	likes?: Maybe<Array<Maybe<User>>>
	/**
	 * The url for the thread page on the AniList website
	 */
	siteUrl?: Maybe<ScalarsEnums["String"]>
	/**
	 * The categories of the thread
	 */
	categories?: Maybe<Array<Maybe<ThreadCategory>>>
	/**
	 * The media categories of the thread
	 */
	mediaCategories?: Maybe<Array<Maybe<Media>>>
}

/**
 * A forum thread category
 */
export interface ThreadCategory {
	__typename: "ThreadCategory" | undefined
	/**
	 * The id of the category
	 */
	id: ScalarsEnums["Int"]
	/**
	 * The name of the category
	 */
	name: ScalarsEnums["String"]
}

/**
 * Forum Thread Comment
 */
export interface ThreadComment {
	__typename: "ThreadComment" | undefined
	/**
	 * The id of the comment
	 */
	id: ScalarsEnums["Int"]
	/**
	 * The user id of the comment's owner
	 */
	userId?: Maybe<ScalarsEnums["Int"]>
	/**
	 * The id of thread the comment belongs to
	 */
	threadId?: Maybe<ScalarsEnums["Int"]>
	/**
	 * The text content of the comment (Markdown)
	 */
	comment: (args?: {
		/**
		 * Return the string in pre-parsed html instead of markdown
		 */
		asHtml?: Maybe<Scalars["Boolean"]>
	}) => Maybe<ScalarsEnums["String"]>
	/**
	 * The amount of likes the comment has
	 */
	likeCount: ScalarsEnums["Int"]
	/**
	 * If the currently authenticated user liked the comment
	 */
	isLiked?: Maybe<ScalarsEnums["Boolean"]>
	/**
	 * The url for the comment page on the AniList website
	 */
	siteUrl?: Maybe<ScalarsEnums["String"]>
	/**
	 * The time of the comments creation
	 */
	createdAt: ScalarsEnums["Int"]
	/**
	 * The time of the comments last update
	 */
	updatedAt: ScalarsEnums["Int"]
	/**
	 * The thread the comment belongs to
	 */
	thread?: Maybe<Thread>
	/**
	 * The user who created the comment
	 */
	user?: Maybe<User>
	/**
	 * The users who liked the comment
	 */
	likes?: Maybe<Array<Maybe<User>>>
	/**
	 * The comment's child reply comments
	 */
	childComments?: Maybe<ScalarsEnums["Json"]>
}

/**
 * Notification for when a user replies to your forum thread comment
 */
export interface ThreadCommentReplyNotification {
	__typename: "ThreadCommentReplyNotification" | undefined
	/**
	 * The id of the Notification
	 */
	id: ScalarsEnums["Int"]
	/**
	 * The id of the user who create the comment reply
	 */
	userId: ScalarsEnums["Int"]
	/**
	 * The type of notification
	 */
	type?: Maybe<ScalarsEnums["NotificationType"]>
	/**
	 * The id of the reply comment
	 */
	commentId: ScalarsEnums["Int"]
	/**
	 * The notification context text
	 */
	context?: Maybe<ScalarsEnums["String"]>
	/**
	 * The time the notification was created at
	 */
	createdAt?: Maybe<ScalarsEnums["Int"]>
	/**
	 * The thread that the relevant comment belongs to
	 */
	thread?: Maybe<Thread>
	/**
	 * The reply thread comment
	 */
	comment?: Maybe<ThreadComment>
	/**
	 * The user who replied to the activity
	 */
	user?: Maybe<User>
}

/**
 * Notification for when a user replies to a subscribed forum thread
 */
export interface ThreadCommentSubscribedNotification {
	__typename: "ThreadCommentSubscribedNotification" | undefined
	/**
	 * The id of the Notification
	 */
	id: ScalarsEnums["Int"]
	/**
	 * The id of the user who commented on the thread
	 */
	userId: ScalarsEnums["Int"]
	/**
	 * The type of notification
	 */
	type?: Maybe<ScalarsEnums["NotificationType"]>
	/**
	 * The id of the new comment in the subscribed thread
	 */
	commentId: ScalarsEnums["Int"]
	/**
	 * The notification context text
	 */
	context?: Maybe<ScalarsEnums["String"]>
	/**
	 * The time the notification was created at
	 */
	createdAt?: Maybe<ScalarsEnums["Int"]>
	/**
	 * The thread that the relevant comment belongs to
	 */
	thread?: Maybe<Thread>
	/**
	 * The reply thread comment
	 */
	comment?: Maybe<ThreadComment>
	/**
	 * The user who replied to the subscribed thread
	 */
	user?: Maybe<User>
}

/**
 * Notification for when a thread comment is liked
 */
export interface ThreadCommentLikeNotification {
	__typename: "ThreadCommentLikeNotification" | undefined
	/**
	 * The id of the Notification
	 */
	id: ScalarsEnums["Int"]
	/**
	 * The id of the user who liked to the activity
	 */
	userId: ScalarsEnums["Int"]
	/**
	 * The type of notification
	 */
	type?: Maybe<ScalarsEnums["NotificationType"]>
	/**
	 * The id of the activity which was liked
	 */
	commentId: ScalarsEnums["Int"]
	/**
	 * The notification context text
	 */
	context?: Maybe<ScalarsEnums["String"]>
	/**
	 * The time the notification was created at
	 */
	createdAt?: Maybe<ScalarsEnums["Int"]>
	/**
	 * The thread that the relevant comment belongs to
	 */
	thread?: Maybe<Thread>
	/**
	 * The thread comment that was liked
	 */
	comment?: Maybe<ThreadComment>
	/**
	 * The user who liked the activity
	 */
	user?: Maybe<User>
}

/**
 * Notification for when a thread is liked
 */
export interface ThreadLikeNotification {
	__typename: "ThreadLikeNotification" | undefined
	/**
	 * The id of the Notification
	 */
	id: ScalarsEnums["Int"]
	/**
	 * The id of the user who liked to the activity
	 */
	userId: ScalarsEnums["Int"]
	/**
	 * The type of notification
	 */
	type?: Maybe<ScalarsEnums["NotificationType"]>
	/**
	 * The id of the thread which was liked
	 */
	threadId: ScalarsEnums["Int"]
	/**
	 * The notification context text
	 */
	context?: Maybe<ScalarsEnums["String"]>
	/**
	 * The time the notification was created at
	 */
	createdAt?: Maybe<ScalarsEnums["Int"]>
	/**
	 * The thread that the relevant comment belongs to
	 */
	thread?: Maybe<Thread>
	/**
	 * The liked thread comment
	 */
	comment?: Maybe<ThreadComment>
	/**
	 * The user who liked the activity
	 */
	user?: Maybe<User>
}

/**
 * Notification for when new media is added to the site
 */
export interface RelatedMediaAdditionNotification {
	__typename: "RelatedMediaAdditionNotification" | undefined
	/**
	 * The id of the Notification
	 */
	id: ScalarsEnums["Int"]
	/**
	 * The type of notification
	 */
	type?: Maybe<ScalarsEnums["NotificationType"]>
	/**
	 * The id of the new media
	 */
	mediaId: ScalarsEnums["Int"]
	/**
	 * The notification context text
	 */
	context?: Maybe<ScalarsEnums["String"]>
	/**
	 * The time the notification was created at
	 */
	createdAt?: Maybe<ScalarsEnums["Int"]>
	/**
	 * The associated media of the airing schedule
	 */
	media?: Maybe<Media>
}

/**
 * List of anime or manga
 */
export interface MediaListCollection {
	__typename: "MediaListCollection" | undefined
	/**
	 * Grouped media list entries
	 */
	lists?: Maybe<Array<Maybe<MediaListGroup>>>
	/**
	 * The owner of the list
	 */
	user?: Maybe<User>
	/**
	 * If there is another chunk
	 */
	hasNextChunk?: Maybe<ScalarsEnums["Boolean"]>
	/**
	 * A map of media list entry arrays grouped by status
	 * @deprecated Not GraphQL spec compliant, use lists field instead.
	 */
	statusLists: (args?: {
		asArray?: Maybe<Scalars["Boolean"]>
	}) => Maybe<Array<Maybe<[MediaList]>>>
	/**
	 * A map of media list entry arrays grouped by custom lists
	 * @deprecated Not GraphQL spec compliant, use lists field instead.
	 */
	customLists: (args?: {
		asArray?: Maybe<Scalars["Boolean"]>
	}) => Maybe<Array<Maybe<[MediaList]>>>
}

/**
 * List group of anime or manga entries
 */
export interface MediaListGroup {
	__typename: "MediaListGroup" | undefined
	/**
	 * Media list entries
	 */
	entries?: Maybe<Array<Maybe<MediaList>>>
	name?: Maybe<ScalarsEnums["String"]>
	isCustomList?: Maybe<ScalarsEnums["Boolean"]>
	isSplitCompletedList?: Maybe<ScalarsEnums["Boolean"]>
	status?: Maybe<ScalarsEnums["MediaListStatus"]>
}

/**
 * Provides the parsed markdown as html
 */
export interface ParsedMarkdown {
	__typename: "ParsedMarkdown" | undefined
	/**
	 * The parsed markdown as html
	 */
	html?: Maybe<ScalarsEnums["String"]>
}

export interface AniChartUser {
	__typename: "AniChartUser" | undefined
	user?: Maybe<User>
	settings?: Maybe<ScalarsEnums["Json"]>
	highlights?: Maybe<ScalarsEnums["Json"]>
}

export interface SiteStatistics {
	__typename: "SiteStatistics" | undefined
	users: (args?: {
		sort?: Maybe<Array<Maybe<SiteTrendSort>>>
		/**
		 * The page
		 */
		page?: Maybe<Scalars["Int"]>
		/**
		 * The amount of entries per page, max 25
		 */
		perPage?: Maybe<Scalars["Int"]>
	}) => Maybe<SiteTrendConnection>
	anime: (args?: {
		sort?: Maybe<Array<Maybe<SiteTrendSort>>>
		/**
		 * The page
		 */
		page?: Maybe<Scalars["Int"]>
		/**
		 * The amount of entries per page, max 25
		 */
		perPage?: Maybe<Scalars["Int"]>
	}) => Maybe<SiteTrendConnection>
	manga: (args?: {
		sort?: Maybe<Array<Maybe<SiteTrendSort>>>
		/**
		 * The page
		 */
		page?: Maybe<Scalars["Int"]>
		/**
		 * The amount of entries per page, max 25
		 */
		perPage?: Maybe<Scalars["Int"]>
	}) => Maybe<SiteTrendConnection>
	characters: (args?: {
		sort?: Maybe<Array<Maybe<SiteTrendSort>>>
		/**
		 * The page
		 */
		page?: Maybe<Scalars["Int"]>
		/**
		 * The amount of entries per page, max 25
		 */
		perPage?: Maybe<Scalars["Int"]>
	}) => Maybe<SiteTrendConnection>
	staff: (args?: {
		sort?: Maybe<Array<Maybe<SiteTrendSort>>>
		/**
		 * The page
		 */
		page?: Maybe<Scalars["Int"]>
		/**
		 * The amount of entries per page, max 25
		 */
		perPage?: Maybe<Scalars["Int"]>
	}) => Maybe<SiteTrendConnection>
	studios: (args?: {
		sort?: Maybe<Array<Maybe<SiteTrendSort>>>
		/**
		 * The page
		 */
		page?: Maybe<Scalars["Int"]>
		/**
		 * The amount of entries per page, max 25
		 */
		perPage?: Maybe<Scalars["Int"]>
	}) => Maybe<SiteTrendConnection>
	reviews: (args?: {
		sort?: Maybe<Array<Maybe<SiteTrendSort>>>
		/**
		 * The page
		 */
		page?: Maybe<Scalars["Int"]>
		/**
		 * The amount of entries per page, max 25
		 */
		perPage?: Maybe<Scalars["Int"]>
	}) => Maybe<SiteTrendConnection>
}

export interface SiteTrendConnection {
	__typename: "SiteTrendConnection" | undefined
	edges?: Maybe<Array<Maybe<SiteTrendEdge>>>
	nodes?: Maybe<Array<Maybe<SiteTrend>>>
	/**
	 * The pagination information
	 */
	pageInfo?: Maybe<PageInfo>
}

/**
 * Site trend connection edge
 */
export interface SiteTrendEdge {
	__typename: "SiteTrendEdge" | undefined
	node?: Maybe<SiteTrend>
}

/**
 * Daily site statistics
 */
export interface SiteTrend {
	__typename: "SiteTrend" | undefined
	/**
	 * The day the data was recorded (timestamp)
	 */
	date: ScalarsEnums["Int"]
	count: ScalarsEnums["Int"]
	/**
	 * The change from yesterday
	 */
	change: ScalarsEnums["Int"]
}

/**
 * Deleted data type
 */
export interface Deleted {
	__typename: "Deleted" | undefined
	/**
	 * If an item has been successfully deleted
	 */
	deleted?: Maybe<ScalarsEnums["Boolean"]>
}

/**
 * Page of data (Used for internal use only)
 */
export interface InternalPage {
	__typename: "InternalPage" | undefined
	mediaSubmissions: (args?: {
		mediaId?: Maybe<Scalars["Int"]>
		submissionId?: Maybe<Scalars["Int"]>
		userId?: Maybe<Scalars["Int"]>
		status?: Maybe<SubmissionStatus>
		/**
		 * Filter by the media's type
		 */
		type?: Maybe<MediaType>
		/**
		 * The order the results will be returned in
		 */
		sort?: Maybe<Array<Maybe<SubmissionSort>>>
	}) => Maybe<Array<Maybe<MediaSubmission>>>
	characterSubmissions: (args?: {
		characterId?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the submitter of the submission
		 */
		userId?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the status of the submission
		 */
		status?: Maybe<SubmissionStatus>
		/**
		 * The order the results will be returned in
		 */
		sort?: Maybe<Array<Maybe<SubmissionSort>>>
	}) => Maybe<Array<Maybe<CharacterSubmission>>>
	staffSubmissions: (args?: {
		staffId?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the submitter of the submission
		 */
		userId?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the status of the submission
		 */
		status?: Maybe<SubmissionStatus>
		/**
		 * The order the results will be returned in
		 */
		sort?: Maybe<Array<Maybe<SubmissionSort>>>
	}) => Maybe<Array<Maybe<StaffSubmission>>>
	revisionHistory: (args?: {
		/**
		 * Filter by the user id
		 */
		userId?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the media id
		 */
		mediaId?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the character id
		 */
		characterId?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the staff id
		 */
		staffId?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the studio id
		 */
		studioId?: Maybe<Scalars["Int"]>
	}) => Maybe<Array<Maybe<RevisionHistory>>>
	reports?: Maybe<Array<Maybe<Report>>>
	modActions: (args?: {
		userId?: Maybe<Scalars["Int"]>
		modId?: Maybe<Scalars["Int"]>
	}) => Maybe<Array<Maybe<ModAction>>>
	/**
	 * The pagination information
	 */
	pageInfo?: Maybe<PageInfo>
	users: (args?: {
		/**
		 * Filter by the user id
		 */
		id?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the name of the user
		 */
		name?: Maybe<Scalars["String"]>
		/**
		 * Filter by search query
		 */
		search?: Maybe<Scalars["String"]>
		/**
		 * The order the results will be returned in
		 */
		sort?: Maybe<Array<Maybe<UserSort>>>
	}) => Maybe<Array<Maybe<User>>>
	media: (args?: {
		/**
		 * Filter by the media id
		 */
		id?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the media's MyAnimeList id
		 */
		idMal?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the start date of the media
		 */
		startDate?: Maybe<Scalars["FuzzyDateInt"]>
		/**
		 * Filter by the end date of the media
		 */
		endDate?: Maybe<Scalars["FuzzyDateInt"]>
		/**
		 * Filter by the season the media was released in
		 */
		season?: Maybe<MediaSeason>
		/**
		 * The year of the season (Winter 2017 would also include December 2016 releases). Requires season argument
		 */
		seasonYear?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the media's type
		 */
		type?: Maybe<MediaType>
		/**
		 * Filter by the media's format
		 */
		format?: Maybe<MediaFormat>
		/**
		 * Filter by the media's current release status
		 */
		status?: Maybe<MediaStatus>
		/**
		 * Filter by amount of episodes the media has
		 */
		episodes?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the media's episode length
		 */
		duration?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the media's chapter count
		 */
		chapters?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the media's volume count
		 */
		volumes?: Maybe<Scalars["Int"]>
		/**
		 * Filter by if the media's intended for 18+ adult audiences
		 */
		isAdult?: Maybe<Scalars["Boolean"]>
		/**
		 * Filter by the media's genres
		 */
		genre?: Maybe<Scalars["String"]>
		/**
		 * Filter by the media's tags
		 */
		tag?: Maybe<Scalars["String"]>
		/**
		 * Only apply the tags filter argument to tags above this rank. Default: 18
		 */
		minimumTagRank?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the media's tags with in a tag category
		 */
		tagCategory?: Maybe<Scalars["String"]>
		/**
		 * Filter by the media on the authenticated user's lists
		 */
		onList?: Maybe<Scalars["Boolean"]>
		/**
		 * Filter media by sites with a online streaming or reading license
		 */
		licensedBy?: Maybe<Scalars["String"]>
		/**
		 * Filter by the media's average score
		 */
		averageScore?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the number of users with this media on their list
		 */
		popularity?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the source type of the media
		 */
		source?: Maybe<MediaSource>
		/**
		 * Filter by the media's country of origin
		 */
		countryOfOrigin?: Maybe<Scalars["CountryCode"]>
		/**
		 * Filter by search query
		 */
		search?: Maybe<Scalars["String"]>
		/**
		 * Filter by the media id
		 */
		id_not?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the media id
		 */
		id_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
		/**
		 * Filter by the media id
		 */
		id_not_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
		/**
		 * Filter by the media's MyAnimeList id
		 */
		idMal_not?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the media's MyAnimeList id
		 */
		idMal_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
		/**
		 * Filter by the media's MyAnimeList id
		 */
		idMal_not_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
		/**
		 * Filter by the start date of the media
		 */
		startDate_greater?: Maybe<Scalars["FuzzyDateInt"]>
		/**
		 * Filter by the start date of the media
		 */
		startDate_lesser?: Maybe<Scalars["FuzzyDateInt"]>
		/**
		 * Filter by the start date of the media
		 */
		startDate_like?: Maybe<Scalars["String"]>
		/**
		 * Filter by the end date of the media
		 */
		endDate_greater?: Maybe<Scalars["FuzzyDateInt"]>
		/**
		 * Filter by the end date of the media
		 */
		endDate_lesser?: Maybe<Scalars["FuzzyDateInt"]>
		/**
		 * Filter by the end date of the media
		 */
		endDate_like?: Maybe<Scalars["String"]>
		/**
		 * Filter by the media's format
		 */
		format_in?: Maybe<Array<Maybe<MediaFormat>>>
		/**
		 * Filter by the media's format
		 */
		format_not?: Maybe<MediaFormat>
		/**
		 * Filter by the media's format
		 */
		format_not_in?: Maybe<Array<Maybe<MediaFormat>>>
		/**
		 * Filter by the media's current release status
		 */
		status_in?: Maybe<Array<Maybe<MediaStatus>>>
		/**
		 * Filter by the media's current release status
		 */
		status_not?: Maybe<MediaStatus>
		/**
		 * Filter by the media's current release status
		 */
		status_not_in?: Maybe<Array<Maybe<MediaStatus>>>
		/**
		 * Filter by amount of episodes the media has
		 */
		episodes_greater?: Maybe<Scalars["Int"]>
		/**
		 * Filter by amount of episodes the media has
		 */
		episodes_lesser?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the media's episode length
		 */
		duration_greater?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the media's episode length
		 */
		duration_lesser?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the media's chapter count
		 */
		chapters_greater?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the media's chapter count
		 */
		chapters_lesser?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the media's volume count
		 */
		volumes_greater?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the media's volume count
		 */
		volumes_lesser?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the media's genres
		 */
		genre_in?: Maybe<Array<Maybe<Scalars["String"]>>>
		/**
		 * Filter by the media's genres
		 */
		genre_not_in?: Maybe<Array<Maybe<Scalars["String"]>>>
		/**
		 * Filter by the media's tags
		 */
		tag_in?: Maybe<Array<Maybe<Scalars["String"]>>>
		/**
		 * Filter by the media's tags
		 */
		tag_not_in?: Maybe<Array<Maybe<Scalars["String"]>>>
		/**
		 * Filter by the media's tags with in a tag category
		 */
		tagCategory_in?: Maybe<Array<Maybe<Scalars["String"]>>>
		/**
		 * Filter by the media's tags with in a tag category
		 */
		tagCategory_not_in?: Maybe<Array<Maybe<Scalars["String"]>>>
		/**
		 * Filter media by sites with a online streaming or reading license
		 */
		licensedBy_in?: Maybe<Array<Maybe<Scalars["String"]>>>
		/**
		 * Filter by the media's average score
		 */
		averageScore_not?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the media's average score
		 */
		averageScore_greater?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the media's average score
		 */
		averageScore_lesser?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the number of users with this media on their list
		 */
		popularity_not?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the number of users with this media on their list
		 */
		popularity_greater?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the number of users with this media on their list
		 */
		popularity_lesser?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the source type of the media
		 */
		source_in?: Maybe<Array<Maybe<MediaSource>>>
		/**
		 * The order the results will be returned in
		 */
		sort?: Maybe<Array<Maybe<MediaSort>>>
	}) => Maybe<Array<Maybe<Media>>>
	characters: (args?: {
		/**
		 * Filter by character id
		 */
		id?: Maybe<Scalars["Int"]>
		/**
		 * Filter by character by if its their birthday today
		 */
		isBirthday?: Maybe<Scalars["Boolean"]>
		/**
		 * Filter by search query
		 */
		search?: Maybe<Scalars["String"]>
		/**
		 * Filter by character id
		 */
		id_not?: Maybe<Scalars["Int"]>
		/**
		 * Filter by character id
		 */
		id_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
		/**
		 * Filter by character id
		 */
		id_not_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
		/**
		 * The order the results will be returned in
		 */
		sort?: Maybe<Array<Maybe<CharacterSort>>>
	}) => Maybe<Array<Maybe<Character>>>
	staff: (args?: {
		/**
		 * Filter by the staff id
		 */
		id?: Maybe<Scalars["Int"]>
		/**
		 * Filter by staff by if its their birthday today
		 */
		isBirthday?: Maybe<Scalars["Boolean"]>
		/**
		 * Filter by search query
		 */
		search?: Maybe<Scalars["String"]>
		/**
		 * Filter by the staff id
		 */
		id_not?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the staff id
		 */
		id_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
		/**
		 * Filter by the staff id
		 */
		id_not_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
		/**
		 * The order the results will be returned in
		 */
		sort?: Maybe<Array<Maybe<StaffSort>>>
	}) => Maybe<Array<Maybe<Staff>>>
	studios: (args?: {
		/**
		 * Filter by the studio id
		 */
		id?: Maybe<Scalars["Int"]>
		/**
		 * Filter by search query
		 */
		search?: Maybe<Scalars["String"]>
		/**
		 * Filter by the studio id
		 */
		id_not?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the studio id
		 */
		id_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
		/**
		 * Filter by the studio id
		 */
		id_not_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
		/**
		 * The order the results will be returned in
		 */
		sort?: Maybe<Array<Maybe<StudioSort>>>
	}) => Maybe<Array<Maybe<Studio>>>
	mediaList: (args?: {
		/**
		 * Filter by a list entry's id
		 */
		id?: Maybe<Scalars["Int"]>
		/**
		 * Filter by a user's id
		 */
		userId?: Maybe<Scalars["Int"]>
		/**
		 * Filter by a user's name
		 */
		userName?: Maybe<Scalars["String"]>
		/**
		 * Filter by the list entries media type
		 */
		type?: Maybe<MediaType>
		/**
		 * Filter by the watching/reading status
		 */
		status?: Maybe<MediaListStatus>
		/**
		 * Filter by the media id of the list entry
		 */
		mediaId?: Maybe<Scalars["Int"]>
		/**
		 * Filter list entries to users who are being followed by the authenticated user
		 */
		isFollowing?: Maybe<Scalars["Boolean"]>
		/**
		 * Filter by note words and #tags
		 */
		notes?: Maybe<Scalars["String"]>
		/**
		 * Filter by the date the user started the media
		 */
		startedAt?: Maybe<Scalars["FuzzyDateInt"]>
		/**
		 * Filter by the date the user completed the media
		 */
		completedAt?: Maybe<Scalars["FuzzyDateInt"]>
		/**
		 * Limit to only entries also on the auth user's list. Requires user id or name arguments.
		 */
		compareWithAuthList?: Maybe<Scalars["Boolean"]>
		/**
		 * Filter by a user's id
		 */
		userId_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
		/**
		 * Filter by the watching/reading status
		 */
		status_in?: Maybe<Array<Maybe<MediaListStatus>>>
		/**
		 * Filter by the watching/reading status
		 */
		status_not_in?: Maybe<Array<Maybe<MediaListStatus>>>
		/**
		 * Filter by the watching/reading status
		 */
		status_not?: Maybe<MediaListStatus>
		/**
		 * Filter by the media id of the list entry
		 */
		mediaId_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
		/**
		 * Filter by the media id of the list entry
		 */
		mediaId_not_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
		/**
		 * Filter by note words and #tags
		 */
		notes_like?: Maybe<Scalars["String"]>
		/**
		 * Filter by the date the user started the media
		 */
		startedAt_greater?: Maybe<Scalars["FuzzyDateInt"]>
		/**
		 * Filter by the date the user started the media
		 */
		startedAt_lesser?: Maybe<Scalars["FuzzyDateInt"]>
		/**
		 * Filter by the date the user started the media
		 */
		startedAt_like?: Maybe<Scalars["String"]>
		/**
		 * Filter by the date the user completed the media
		 */
		completedAt_greater?: Maybe<Scalars["FuzzyDateInt"]>
		/**
		 * Filter by the date the user completed the media
		 */
		completedAt_lesser?: Maybe<Scalars["FuzzyDateInt"]>
		/**
		 * Filter by the date the user completed the media
		 */
		completedAt_like?: Maybe<Scalars["String"]>
		/**
		 * The order the results will be returned in
		 */
		sort?: Maybe<Array<Maybe<MediaListSort>>>
	}) => Maybe<Array<Maybe<MediaList>>>
	airingSchedules: (args?: {
		/**
		 * Filter by the id of the airing schedule item
		 */
		id?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the id of associated media
		 */
		mediaId?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the airing episode number
		 */
		episode?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the time of airing
		 */
		airingAt?: Maybe<Scalars["Int"]>
		/**
		 * Filter to episodes that haven't yet aired
		 */
		notYetAired?: Maybe<Scalars["Boolean"]>
		/**
		 * Filter by the id of the airing schedule item
		 */
		id_not?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the id of the airing schedule item
		 */
		id_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
		/**
		 * Filter by the id of the airing schedule item
		 */
		id_not_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
		/**
		 * Filter by the id of associated media
		 */
		mediaId_not?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the id of associated media
		 */
		mediaId_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
		/**
		 * Filter by the id of associated media
		 */
		mediaId_not_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
		/**
		 * Filter by the airing episode number
		 */
		episode_not?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the airing episode number
		 */
		episode_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
		/**
		 * Filter by the airing episode number
		 */
		episode_not_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
		/**
		 * Filter by the airing episode number
		 */
		episode_greater?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the airing episode number
		 */
		episode_lesser?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the time of airing
		 */
		airingAt_greater?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the time of airing
		 */
		airingAt_lesser?: Maybe<Scalars["Int"]>
		/**
		 * The order the results will be returned in
		 */
		sort?: Maybe<Array<Maybe<AiringSort>>>
	}) => Maybe<Array<Maybe<AiringSchedule>>>
	mediaTrends: (args?: {
		/**
		 * Filter by the media id
		 */
		mediaId?: Maybe<Scalars["Int"]>
		/**
		 * Filter by date
		 */
		date?: Maybe<Scalars["Int"]>
		/**
		 * Filter by trending amount
		 */
		trending?: Maybe<Scalars["Int"]>
		/**
		 * Filter by score
		 */
		averageScore?: Maybe<Scalars["Int"]>
		/**
		 * Filter by popularity
		 */
		popularity?: Maybe<Scalars["Int"]>
		/**
		 * Filter by episode number
		 */
		episode?: Maybe<Scalars["Int"]>
		/**
		 * Filter to stats recorded while the media was releasing
		 */
		releasing?: Maybe<Scalars["Boolean"]>
		/**
		 * Filter by the media id
		 */
		mediaId_not?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the media id
		 */
		mediaId_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
		/**
		 * Filter by the media id
		 */
		mediaId_not_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
		/**
		 * Filter by date
		 */
		date_greater?: Maybe<Scalars["Int"]>
		/**
		 * Filter by date
		 */
		date_lesser?: Maybe<Scalars["Int"]>
		/**
		 * Filter by trending amount
		 */
		trending_greater?: Maybe<Scalars["Int"]>
		/**
		 * Filter by trending amount
		 */
		trending_lesser?: Maybe<Scalars["Int"]>
		/**
		 * Filter by trending amount
		 */
		trending_not?: Maybe<Scalars["Int"]>
		/**
		 * Filter by score
		 */
		averageScore_greater?: Maybe<Scalars["Int"]>
		/**
		 * Filter by score
		 */
		averageScore_lesser?: Maybe<Scalars["Int"]>
		/**
		 * Filter by score
		 */
		averageScore_not?: Maybe<Scalars["Int"]>
		/**
		 * Filter by popularity
		 */
		popularity_greater?: Maybe<Scalars["Int"]>
		/**
		 * Filter by popularity
		 */
		popularity_lesser?: Maybe<Scalars["Int"]>
		/**
		 * Filter by popularity
		 */
		popularity_not?: Maybe<Scalars["Int"]>
		/**
		 * Filter by episode number
		 */
		episode_greater?: Maybe<Scalars["Int"]>
		/**
		 * Filter by episode number
		 */
		episode_lesser?: Maybe<Scalars["Int"]>
		/**
		 * Filter by episode number
		 */
		episode_not?: Maybe<Scalars["Int"]>
		/**
		 * The order the results will be returned in
		 */
		sort?: Maybe<Array<Maybe<MediaTrendSort>>>
	}) => Maybe<Array<Maybe<MediaTrend>>>
	notifications: (args?: {
		/**
		 * Filter by the type of notifications
		 */
		type?: Maybe<NotificationType>
		/**
		 * Reset the unread notification count to 0 on load
		 */
		resetNotificationCount?: Maybe<Scalars["Boolean"]>
		/**
		 * Filter by the type of notifications
		 */
		type_in?: Maybe<Array<Maybe<NotificationType>>>
	}) => Maybe<Array<Maybe<NotificationUnion>>>
	followers: (args: {
		/**
		 * User id of the follower/followed
		 */
		userId: Scalars["Int"]
		/**
		 * The order the results will be returned in
		 */
		sort?: Maybe<Array<Maybe<UserSort>>>
	}) => Maybe<Array<Maybe<User>>>
	following: (args: {
		/**
		 * User id of the follower/followed
		 */
		userId: Scalars["Int"]
		/**
		 * The order the results will be returned in
		 */
		sort?: Maybe<Array<Maybe<UserSort>>>
	}) => Maybe<Array<Maybe<User>>>
	activities: (args?: {
		/**
		 * Filter by the activity id
		 */
		id?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the owner user id
		 */
		userId?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the id of the user who sent a message
		 */
		messengerId?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the associated media id of the activity
		 */
		mediaId?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the type of activity
		 */
		type?: Maybe<ActivityType>
		/**
		 * Filter activity to users who are being followed by the authenticated user
		 */
		isFollowing?: Maybe<Scalars["Boolean"]>
		/**
		 * Filter activity to only activity with replies
		 */
		hasReplies?: Maybe<Scalars["Boolean"]>
		/**
		 * Filter activity to only activity with replies or is of type text
		 */
		hasRepliesOrTypeText?: Maybe<Scalars["Boolean"]>
		/**
		 * Filter by the time the activity was created
		 */
		createdAt?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the activity id
		 */
		id_not?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the activity id
		 */
		id_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
		/**
		 * Filter by the activity id
		 */
		id_not_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
		/**
		 * Filter by the owner user id
		 */
		userId_not?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the owner user id
		 */
		userId_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
		/**
		 * Filter by the owner user id
		 */
		userId_not_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
		/**
		 * Filter by the id of the user who sent a message
		 */
		messengerId_not?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the id of the user who sent a message
		 */
		messengerId_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
		/**
		 * Filter by the id of the user who sent a message
		 */
		messengerId_not_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
		/**
		 * Filter by the associated media id of the activity
		 */
		mediaId_not?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the associated media id of the activity
		 */
		mediaId_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
		/**
		 * Filter by the associated media id of the activity
		 */
		mediaId_not_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
		/**
		 * Filter by the type of activity
		 */
		type_not?: Maybe<ActivityType>
		/**
		 * Filter by the type of activity
		 */
		type_in?: Maybe<Array<Maybe<ActivityType>>>
		/**
		 * Filter by the type of activity
		 */
		type_not_in?: Maybe<Array<Maybe<ActivityType>>>
		/**
		 * Filter by the time the activity was created
		 */
		createdAt_greater?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the time the activity was created
		 */
		createdAt_lesser?: Maybe<Scalars["Int"]>
		/**
		 * The order the results will be returned in
		 */
		sort?: Maybe<Array<Maybe<ActivitySort>>>
	}) => Maybe<Array<Maybe<ActivityUnion>>>
	activityReplies: (args?: {
		/**
		 * Filter by the reply id
		 */
		id?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the parent id
		 */
		activityId?: Maybe<Scalars["Int"]>
	}) => Maybe<Array<Maybe<ActivityReply>>>
	threads: (args?: {
		/**
		 * Filter by the thread id
		 */
		id?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the user id of the thread's creator
		 */
		userId?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the user id of the last user to comment on the thread
		 */
		replyUserId?: Maybe<Scalars["Int"]>
		/**
		 * Filter by if the currently authenticated user's subscribed threads
		 */
		subscribed?: Maybe<Scalars["Boolean"]>
		/**
		 * Filter by thread category id
		 */
		categoryId?: Maybe<Scalars["Int"]>
		/**
		 * Filter by thread media id category
		 */
		mediaCategoryId?: Maybe<Scalars["Int"]>
		/**
		 * Filter by search query
		 */
		search?: Maybe<Scalars["String"]>
		/**
		 * Filter by the thread id
		 */
		id_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
		/**
		 * The order the results will be returned in
		 */
		sort?: Maybe<Array<Maybe<ThreadSort>>>
	}) => Maybe<Array<Maybe<Thread>>>
	threadComments: (args?: {
		/**
		 * Filter by the comment id
		 */
		id?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the thread id
		 */
		threadId?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the user id of the comment's creator
		 */
		userId?: Maybe<Scalars["Int"]>
		/**
		 * The order the results will be returned in
		 */
		sort?: Maybe<Array<Maybe<ThreadCommentSort>>>
	}) => Maybe<Array<Maybe<ThreadComment>>>
	reviews: (args?: {
		/**
		 * Filter by Review id
		 */
		id?: Maybe<Scalars["Int"]>
		/**
		 * Filter by media id
		 */
		mediaId?: Maybe<Scalars["Int"]>
		/**
		 * Filter by user id
		 */
		userId?: Maybe<Scalars["Int"]>
		/**
		 * Filter by media type
		 */
		mediaType?: Maybe<MediaType>
		/**
		 * The order the results will be returned in
		 */
		sort?: Maybe<Array<Maybe<ReviewSort>>>
	}) => Maybe<Array<Maybe<Review>>>
	recommendations: (args?: {
		/**
		 * Filter by recommendation id
		 */
		id?: Maybe<Scalars["Int"]>
		/**
		 * Filter by media id
		 */
		mediaId?: Maybe<Scalars["Int"]>
		/**
		 * Filter by media recommendation id
		 */
		mediaRecommendationId?: Maybe<Scalars["Int"]>
		/**
		 * Filter by user who created the recommendation
		 */
		userId?: Maybe<Scalars["Int"]>
		/**
		 * Filter by total rating of the recommendation
		 */
		rating?: Maybe<Scalars["Int"]>
		/**
		 * Filter by the media on the authenticated user's lists
		 */
		onList?: Maybe<Scalars["Boolean"]>
		/**
		 * Filter by total rating of the recommendation
		 */
		rating_greater?: Maybe<Scalars["Int"]>
		/**
		 * Filter by total rating of the recommendation
		 */
		rating_lesser?: Maybe<Scalars["Int"]>
		/**
		 * The order the results will be returned in
		 */
		sort?: Maybe<Array<Maybe<RecommendationSort>>>
	}) => Maybe<Array<Maybe<Recommendation>>>
	likes: (args?: {
		/**
		 * The id of the likeable type
		 */
		likeableId?: Maybe<Scalars["Int"]>
		/**
		 * The type of model the id applies to
		 */
		type?: Maybe<LikeableType>
	}) => Maybe<Array<Maybe<User>>>
}

/**
 * Media submission
 */
export interface MediaSubmission {
	__typename: "MediaSubmission" | undefined
	/**
	 * The id of the submission
	 */
	id: ScalarsEnums["Int"]
	/**
	 * User submitter of the submission
	 */
	submitter?: Maybe<User>
	/**
	 * Status of the submission
	 */
	status?: Maybe<ScalarsEnums["SubmissionStatus"]>
	submitterStats?: Maybe<ScalarsEnums["Json"]>
	notes?: Maybe<ScalarsEnums["String"]>
	source?: Maybe<ScalarsEnums["String"]>
	changes?: Maybe<Array<Maybe<ScalarsEnums["String"]>>>
	media?: Maybe<Media>
	submission?: Maybe<Media>
	characters?: Maybe<Array<Maybe<MediaSubmissionComparison>>>
	staff?: Maybe<Array<Maybe<MediaSubmissionComparison>>>
	studios?: Maybe<Array<Maybe<MediaSubmissionComparison>>>
	relations?: Maybe<Array<Maybe<MediaEdge>>>
	externalLinks?: Maybe<Array<Maybe<MediaExternalLink>>>
	createdAt?: Maybe<ScalarsEnums["Int"]>
}

/**
 * Media submission with comparison to current data
 */
export interface MediaSubmissionComparison {
	__typename: "MediaSubmissionComparison" | undefined
	submission?: Maybe<MediaSubmissionEdge>
	character?: Maybe<MediaCharacter>
	staff?: Maybe<StaffEdge>
	studio?: Maybe<StudioEdge>
}

export interface MediaSubmissionEdge {
	__typename: "MediaSubmissionEdge" | undefined
	/**
	 * The id of the direct submission
	 */
	id?: Maybe<ScalarsEnums["Int"]>
	characterRole?: Maybe<ScalarsEnums["CharacterRole"]>
	staffRole?: Maybe<ScalarsEnums["String"]>
	roleNotes?: Maybe<ScalarsEnums["String"]>
	dubGroup?: Maybe<ScalarsEnums["String"]>
	characterName?: Maybe<ScalarsEnums["String"]>
	isMain?: Maybe<ScalarsEnums["Boolean"]>
	character?: Maybe<Character>
	characterSubmission?: Maybe<Character>
	voiceActor?: Maybe<Staff>
	voiceActorSubmission?: Maybe<Staff>
	staff?: Maybe<Staff>
	staffSubmission?: Maybe<Staff>
	studio?: Maybe<Studio>
	media?: Maybe<Media>
}

/**
 * Internal - Media characters separated
 */
export interface MediaCharacter {
	__typename: "MediaCharacter" | undefined
	/**
	 * The id of the connection
	 */
	id?: Maybe<ScalarsEnums["Int"]>
	/**
	 * The characters role in the media
	 */
	role?: Maybe<ScalarsEnums["CharacterRole"]>
	roleNotes?: Maybe<ScalarsEnums["String"]>
	dubGroup?: Maybe<ScalarsEnums["String"]>
	/**
	 * Media specific character name
	 */
	characterName?: Maybe<ScalarsEnums["String"]>
	/**
	 * The characters in the media voiced by the parent actor
	 */
	character?: Maybe<Character>
	/**
	 * The voice actor of the character
	 */
	voiceActor?: Maybe<Staff>
}

/**
 * A submission for a character that features in an anime or manga
 */
export interface CharacterSubmission {
	__typename: "CharacterSubmission" | undefined
	/**
	 * The id of the submission
	 */
	id: ScalarsEnums["Int"]
	/**
	 * Character that the submission is referencing
	 */
	character?: Maybe<Character>
	/**
	 * The character submission changes
	 */
	submission?: Maybe<Character>
	/**
	 * Submitter for the submission
	 */
	submitter?: Maybe<User>
	/**
	 * Status of the submission
	 */
	status?: Maybe<ScalarsEnums["SubmissionStatus"]>
	/**
	 * Inner details of submission status
	 */
	notes?: Maybe<ScalarsEnums["String"]>
	source?: Maybe<ScalarsEnums["String"]>
	createdAt?: Maybe<ScalarsEnums["Int"]>
}

/**
 * A submission for a staff that features in an anime or manga
 */
export interface StaffSubmission {
	__typename: "StaffSubmission" | undefined
	/**
	 * The id of the submission
	 */
	id: ScalarsEnums["Int"]
	/**
	 * Staff that the submission is referencing
	 */
	staff?: Maybe<Staff>
	/**
	 * The staff submission changes
	 */
	submission?: Maybe<Staff>
	/**
	 * Submitter for the submission
	 */
	submitter?: Maybe<User>
	/**
	 * Status of the submission
	 */
	status?: Maybe<ScalarsEnums["SubmissionStatus"]>
	/**
	 * Inner details of submission status
	 */
	notes?: Maybe<ScalarsEnums["String"]>
	source?: Maybe<ScalarsEnums["String"]>
	createdAt?: Maybe<ScalarsEnums["Int"]>
}

/**
 * Feed of mod edit activity
 */
export interface RevisionHistory {
	__typename: "RevisionHistory" | undefined
	/**
	 * The id of the media
	 */
	id: ScalarsEnums["Int"]
	/**
	 * The action taken on the objects
	 */
	action?: Maybe<ScalarsEnums["RevisionHistoryAction"]>
	/**
	 * A JSON object of the fields that changed
	 */
	changes?: Maybe<ScalarsEnums["Json"]>
	/**
	 * The user who made the edit to the object
	 */
	user?: Maybe<User>
	/**
	 * The media the mod feed entry references
	 */
	media?: Maybe<Media>
	/**
	 * The character the mod feed entry references
	 */
	character?: Maybe<Character>
	/**
	 * The staff member the mod feed entry references
	 */
	staff?: Maybe<Staff>
	/**
	 * The studio the mod feed entry references
	 */
	studio?: Maybe<Studio>
	/**
	 * When the mod feed entry was created
	 */
	createdAt?: Maybe<ScalarsEnums["Int"]>
}

export interface Report {
	__typename: "Report" | undefined
	id: ScalarsEnums["Int"]
	reporter?: Maybe<User>
	reported?: Maybe<User>
	reason?: Maybe<ScalarsEnums["String"]>
	/**
	 * When the entry data was created
	 */
	createdAt?: Maybe<ScalarsEnums["Int"]>
}

export interface ModAction {
	__typename: "ModAction" | undefined
	/**
	 * The id of the action
	 */
	id: ScalarsEnums["Int"]
	user?: Maybe<User>
	mod?: Maybe<User>
	type?: Maybe<ScalarsEnums["ModActionType"]>
	objectId?: Maybe<ScalarsEnums["Int"]>
	objectType?: Maybe<ScalarsEnums["String"]>
	data?: Maybe<ScalarsEnums["String"]>
	createdAt: ScalarsEnums["Int"]
}

export interface CharacterSubmissionConnection {
	__typename: "CharacterSubmissionConnection" | undefined
	edges?: Maybe<Array<Maybe<CharacterSubmissionEdge>>>
	nodes?: Maybe<Array<Maybe<CharacterSubmission>>>
	/**
	 * The pagination information
	 */
	pageInfo?: Maybe<PageInfo>
}

/**
 * CharacterSubmission connection edge
 */
export interface CharacterSubmissionEdge {
	__typename: "CharacterSubmissionEdge" | undefined
	node?: Maybe<CharacterSubmission>
	/**
	 * The characters role in the media
	 */
	role?: Maybe<ScalarsEnums["CharacterRole"]>
	/**
	 * The voice actors of the character
	 */
	voiceActors?: Maybe<Array<Maybe<Staff>>>
	/**
	 * The submitted voice actors of the character
	 */
	submittedVoiceActors?: Maybe<Array<Maybe<StaffSubmission>>>
}

/**
 * User data for moderators
 */
export interface UserModData {
	__typename: "UserModData" | undefined
	alts?: Maybe<Array<Maybe<User>>>
	bans?: Maybe<ScalarsEnums["Json"]>
	ip?: Maybe<ScalarsEnums["Json"]>
	counts?: Maybe<ScalarsEnums["Json"]>
}

export interface SchemaObjectTypes {
	Query: Query
	Mutation: Mutation
	Subscription: Subscription
	Page: Page
	PageInfo: PageInfo
	User: User
	UserAvatar: UserAvatar
	UserOptions: UserOptions
	NotificationOption: NotificationOption
	MediaListOptions: MediaListOptions
	MediaListTypeOptions: MediaListTypeOptions
	Favourites: Favourites
	MediaConnection: MediaConnection
	MediaEdge: MediaEdge
	Media: Media
	MediaTitle: MediaTitle
	FuzzyDate: FuzzyDate
	MediaTrailer: MediaTrailer
	MediaCoverImage: MediaCoverImage
	MediaTag: MediaTag
	CharacterConnection: CharacterConnection
	CharacterEdge: CharacterEdge
	Character: Character
	CharacterName: CharacterName
	CharacterImage: CharacterImage
	Staff: Staff
	StaffName: StaffName
	StaffImage: StaffImage
	StaffRoleType: StaffRoleType
	StaffConnection: StaffConnection
	StaffEdge: StaffEdge
	StudioConnection: StudioConnection
	StudioEdge: StudioEdge
	Studio: Studio
	AiringSchedule: AiringSchedule
	AiringScheduleConnection: AiringScheduleConnection
	AiringScheduleEdge: AiringScheduleEdge
	MediaTrendConnection: MediaTrendConnection
	MediaTrendEdge: MediaTrendEdge
	MediaTrend: MediaTrend
	MediaExternalLink: MediaExternalLink
	MediaStreamingEpisode: MediaStreamingEpisode
	MediaRank: MediaRank
	MediaList: MediaList
	ReviewConnection: ReviewConnection
	ReviewEdge: ReviewEdge
	Review: Review
	RecommendationConnection: RecommendationConnection
	RecommendationEdge: RecommendationEdge
	Recommendation: Recommendation
	MediaStats: MediaStats
	ScoreDistribution: ScoreDistribution
	StatusDistribution: StatusDistribution
	AiringProgression: AiringProgression
	UserStatisticTypes: UserStatisticTypes
	UserStatistics: UserStatistics
	UserFormatStatistic: UserFormatStatistic
	UserStatusStatistic: UserStatusStatistic
	UserScoreStatistic: UserScoreStatistic
	UserLengthStatistic: UserLengthStatistic
	UserReleaseYearStatistic: UserReleaseYearStatistic
	UserStartYearStatistic: UserStartYearStatistic
	UserGenreStatistic: UserGenreStatistic
	UserTagStatistic: UserTagStatistic
	UserCountryStatistic: UserCountryStatistic
	UserVoiceActorStatistic: UserVoiceActorStatistic
	UserStaffStatistic: UserStaffStatistic
	UserStudioStatistic: UserStudioStatistic
	UserStats: UserStats
	UserActivityHistory: UserActivityHistory
	ListScoreStats: ListScoreStats
	GenreStats: GenreStats
	TagStats: TagStats
	StaffStats: StaffStats
	StudioStats: StudioStats
	YearStats: YearStats
	FormatStats: FormatStats
	AiringNotification: AiringNotification
	FollowingNotification: FollowingNotification
	ActivityMessageNotification: ActivityMessageNotification
	MessageActivity: MessageActivity
	ActivityReply: ActivityReply
	ActivityMentionNotification: ActivityMentionNotification
	TextActivity: TextActivity
	ListActivity: ListActivity
	ActivityReplyNotification: ActivityReplyNotification
	ActivityReplySubscribedNotification: ActivityReplySubscribedNotification
	ActivityLikeNotification: ActivityLikeNotification
	ActivityReplyLikeNotification: ActivityReplyLikeNotification
	ThreadCommentMentionNotification: ThreadCommentMentionNotification
	Thread: Thread
	ThreadCategory: ThreadCategory
	ThreadComment: ThreadComment
	ThreadCommentReplyNotification: ThreadCommentReplyNotification
	ThreadCommentSubscribedNotification: ThreadCommentSubscribedNotification
	ThreadCommentLikeNotification: ThreadCommentLikeNotification
	ThreadLikeNotification: ThreadLikeNotification
	RelatedMediaAdditionNotification: RelatedMediaAdditionNotification
	MediaListCollection: MediaListCollection
	MediaListGroup: MediaListGroup
	ParsedMarkdown: ParsedMarkdown
	AniChartUser: AniChartUser
	SiteStatistics: SiteStatistics
	SiteTrendConnection: SiteTrendConnection
	SiteTrendEdge: SiteTrendEdge
	SiteTrend: SiteTrend
	Deleted: Deleted
	InternalPage: InternalPage
	MediaSubmission: MediaSubmission
	MediaSubmissionComparison: MediaSubmissionComparison
	MediaSubmissionEdge: MediaSubmissionEdge
	MediaCharacter: MediaCharacter
	CharacterSubmission: CharacterSubmission
	StaffSubmission: StaffSubmission
	RevisionHistory: RevisionHistory
	Report: Report
	ModAction: ModAction
	CharacterSubmissionConnection: CharacterSubmissionConnection
	CharacterSubmissionEdge: CharacterSubmissionEdge
	UserModData: UserModData
}
export type SchemaObjectTypesNames =
	| "Query"
	| "Mutation"
	| "Subscription"
	| "Page"
	| "PageInfo"
	| "User"
	| "UserAvatar"
	| "UserOptions"
	| "NotificationOption"
	| "MediaListOptions"
	| "MediaListTypeOptions"
	| "Favourites"
	| "MediaConnection"
	| "MediaEdge"
	| "Media"
	| "MediaTitle"
	| "FuzzyDate"
	| "MediaTrailer"
	| "MediaCoverImage"
	| "MediaTag"
	| "CharacterConnection"
	| "CharacterEdge"
	| "Character"
	| "CharacterName"
	| "CharacterImage"
	| "Staff"
	| "StaffName"
	| "StaffImage"
	| "StaffRoleType"
	| "StaffConnection"
	| "StaffEdge"
	| "StudioConnection"
	| "StudioEdge"
	| "Studio"
	| "AiringSchedule"
	| "AiringScheduleConnection"
	| "AiringScheduleEdge"
	| "MediaTrendConnection"
	| "MediaTrendEdge"
	| "MediaTrend"
	| "MediaExternalLink"
	| "MediaStreamingEpisode"
	| "MediaRank"
	| "MediaList"
	| "ReviewConnection"
	| "ReviewEdge"
	| "Review"
	| "RecommendationConnection"
	| "RecommendationEdge"
	| "Recommendation"
	| "MediaStats"
	| "ScoreDistribution"
	| "StatusDistribution"
	| "AiringProgression"
	| "UserStatisticTypes"
	| "UserStatistics"
	| "UserFormatStatistic"
	| "UserStatusStatistic"
	| "UserScoreStatistic"
	| "UserLengthStatistic"
	| "UserReleaseYearStatistic"
	| "UserStartYearStatistic"
	| "UserGenreStatistic"
	| "UserTagStatistic"
	| "UserCountryStatistic"
	| "UserVoiceActorStatistic"
	| "UserStaffStatistic"
	| "UserStudioStatistic"
	| "UserStats"
	| "UserActivityHistory"
	| "ListScoreStats"
	| "GenreStats"
	| "TagStats"
	| "StaffStats"
	| "StudioStats"
	| "YearStats"
	| "FormatStats"
	| "AiringNotification"
	| "FollowingNotification"
	| "ActivityMessageNotification"
	| "MessageActivity"
	| "ActivityReply"
	| "ActivityMentionNotification"
	| "TextActivity"
	| "ListActivity"
	| "ActivityReplyNotification"
	| "ActivityReplySubscribedNotification"
	| "ActivityLikeNotification"
	| "ActivityReplyLikeNotification"
	| "ThreadCommentMentionNotification"
	| "Thread"
	| "ThreadCategory"
	| "ThreadComment"
	| "ThreadCommentReplyNotification"
	| "ThreadCommentSubscribedNotification"
	| "ThreadCommentLikeNotification"
	| "ThreadLikeNotification"
	| "RelatedMediaAdditionNotification"
	| "MediaListCollection"
	| "MediaListGroup"
	| "ParsedMarkdown"
	| "AniChartUser"
	| "SiteStatistics"
	| "SiteTrendConnection"
	| "SiteTrendEdge"
	| "SiteTrend"
	| "Deleted"
	| "InternalPage"
	| "MediaSubmission"
	| "MediaSubmissionComparison"
	| "MediaSubmissionEdge"
	| "MediaCharacter"
	| "CharacterSubmission"
	| "StaffSubmission"
	| "RevisionHistory"
	| "Report"
	| "ModAction"
	| "CharacterSubmissionConnection"
	| "CharacterSubmissionEdge"
	| "UserModData"

/**
 * Notification union type
 */
export type NotificationUnion =
	| {
			__typename: "AiringNotification" | undefined
			activity?: undefined
			activityId?: undefined
			/**
			 * The id of the aired anime
			 */
			animeId: ScalarsEnums["Int"]
			comment?: undefined
			commentId?: undefined
			context?: undefined
			/**
			 * The notification context text
			 */
			contexts?: Maybe<Array<Maybe<ScalarsEnums["String"]>>>
			/**
			 * The time the notification was created at
			 */
			createdAt?: Maybe<ScalarsEnums["Int"]>
			/**
			 * The episode number that just aired
			 */
			episode: ScalarsEnums["Int"]
			/**
			 * The id of the Notification
			 */
			id: ScalarsEnums["Int"]
			/**
			 * The associated media of the airing schedule
			 */
			media?: Maybe<Media>
			mediaId?: undefined
			message?: undefined
			thread?: undefined
			threadId?: undefined
			/**
			 * The type of notification
			 */
			type?: Maybe<ScalarsEnums["NotificationType"]>
			user?: undefined
			userId?: undefined
	  }
	| {
			__typename: "FollowingNotification" | undefined
			activity?: undefined
			activityId?: undefined
			animeId?: undefined
			comment?: undefined
			commentId?: undefined
			/**
			 * The notification context text
			 */
			context?: Maybe<ScalarsEnums["String"]>
			contexts?: undefined
			/**
			 * The time the notification was created at
			 */
			createdAt?: Maybe<ScalarsEnums["Int"]>
			episode?: undefined
			/**
			 * The id of the Notification
			 */
			id: ScalarsEnums["Int"]
			media?: undefined
			mediaId?: undefined
			message?: undefined
			thread?: undefined
			threadId?: undefined
			/**
			 * The type of notification
			 */
			type?: Maybe<ScalarsEnums["NotificationType"]>
			/**
			 * The liked activity
			 */
			user?: Maybe<User>
			/**
			 * The id of the user who followed the authenticated user
			 */
			userId: ScalarsEnums["Int"]
	  }
	| {
			__typename: "ActivityMessageNotification" | undefined
			activity?: undefined
			/**
			 * The id of the activity message
			 */
			activityId: ScalarsEnums["Int"]
			animeId?: undefined
			comment?: undefined
			commentId?: undefined
			/**
			 * The notification context text
			 */
			context?: Maybe<ScalarsEnums["String"]>
			contexts?: undefined
			/**
			 * The time the notification was created at
			 */
			createdAt?: Maybe<ScalarsEnums["Int"]>
			episode?: undefined
			/**
			 * The id of the Notification
			 */
			id: ScalarsEnums["Int"]
			media?: undefined
			mediaId?: undefined
			/**
			 * The message activity
			 */
			message?: Maybe<MessageActivity>
			thread?: undefined
			threadId?: undefined
			/**
			 * The type of notification
			 */
			type?: Maybe<ScalarsEnums["NotificationType"]>
			/**
			 * The user who sent the message
			 */
			user?: Maybe<User>
			/**
			 * The if of the user who send the message
			 */
			userId: ScalarsEnums["Int"]
	  }
	| {
			__typename: "ActivityMentionNotification" | undefined
			/**
			 * The liked activity
			 */
			activity?: Maybe<ActivityUnion>
			/**
			 * The id of the activity where mentioned
			 */
			activityId: ScalarsEnums["Int"]
			animeId?: undefined
			comment?: undefined
			commentId?: undefined
			/**
			 * The notification context text
			 */
			context?: Maybe<ScalarsEnums["String"]>
			contexts?: undefined
			/**
			 * The time the notification was created at
			 */
			createdAt?: Maybe<ScalarsEnums["Int"]>
			episode?: undefined
			/**
			 * The id of the Notification
			 */
			id: ScalarsEnums["Int"]
			media?: undefined
			mediaId?: undefined
			message?: undefined
			thread?: undefined
			threadId?: undefined
			/**
			 * The type of notification
			 */
			type?: Maybe<ScalarsEnums["NotificationType"]>
			/**
			 * The user who mentioned the authenticated user
			 */
			user?: Maybe<User>
			/**
			 * The id of the user who mentioned the authenticated user
			 */
			userId: ScalarsEnums["Int"]
	  }
	| {
			__typename: "ActivityReplyNotification" | undefined
			/**
			 * The liked activity
			 */
			activity?: Maybe<ActivityUnion>
			/**
			 * The id of the activity which was replied too
			 */
			activityId: ScalarsEnums["Int"]
			animeId?: undefined
			comment?: undefined
			commentId?: undefined
			/**
			 * The notification context text
			 */
			context?: Maybe<ScalarsEnums["String"]>
			contexts?: undefined
			/**
			 * The time the notification was created at
			 */
			createdAt?: Maybe<ScalarsEnums["Int"]>
			episode?: undefined
			/**
			 * The id of the Notification
			 */
			id: ScalarsEnums["Int"]
			media?: undefined
			mediaId?: undefined
			message?: undefined
			thread?: undefined
			threadId?: undefined
			/**
			 * The type of notification
			 */
			type?: Maybe<ScalarsEnums["NotificationType"]>
			/**
			 * The user who replied to the activity
			 */
			user?: Maybe<User>
			/**
			 * The id of the user who replied to the activity
			 */
			userId: ScalarsEnums["Int"]
	  }
	| {
			__typename: "ActivityReplySubscribedNotification" | undefined
			/**
			 * The liked activity
			 */
			activity?: Maybe<ActivityUnion>
			/**
			 * The id of the activity which was replied too
			 */
			activityId: ScalarsEnums["Int"]
			animeId?: undefined
			comment?: undefined
			commentId?: undefined
			/**
			 * The notification context text
			 */
			context?: Maybe<ScalarsEnums["String"]>
			contexts?: undefined
			/**
			 * The time the notification was created at
			 */
			createdAt?: Maybe<ScalarsEnums["Int"]>
			episode?: undefined
			/**
			 * The id of the Notification
			 */
			id: ScalarsEnums["Int"]
			media?: undefined
			mediaId?: undefined
			message?: undefined
			thread?: undefined
			threadId?: undefined
			/**
			 * The type of notification
			 */
			type?: Maybe<ScalarsEnums["NotificationType"]>
			/**
			 * The user who replied to the activity
			 */
			user?: Maybe<User>
			/**
			 * The id of the user who replied to the activity
			 */
			userId: ScalarsEnums["Int"]
	  }
	| {
			__typename: "ActivityLikeNotification" | undefined
			/**
			 * The liked activity
			 */
			activity?: Maybe<ActivityUnion>
			/**
			 * The id of the activity which was liked
			 */
			activityId: ScalarsEnums["Int"]
			animeId?: undefined
			comment?: undefined
			commentId?: undefined
			/**
			 * The notification context text
			 */
			context?: Maybe<ScalarsEnums["String"]>
			contexts?: undefined
			/**
			 * The time the notification was created at
			 */
			createdAt?: Maybe<ScalarsEnums["Int"]>
			episode?: undefined
			/**
			 * The id of the Notification
			 */
			id: ScalarsEnums["Int"]
			media?: undefined
			mediaId?: undefined
			message?: undefined
			thread?: undefined
			threadId?: undefined
			/**
			 * The type of notification
			 */
			type?: Maybe<ScalarsEnums["NotificationType"]>
			/**
			 * The user who liked the activity
			 */
			user?: Maybe<User>
			/**
			 * The id of the user who liked to the activity
			 */
			userId: ScalarsEnums["Int"]
	  }
	| {
			__typename: "ActivityReplyLikeNotification" | undefined
			/**
			 * The liked activity
			 */
			activity?: Maybe<ActivityUnion>
			/**
			 * The id of the activity where the reply which was liked
			 */
			activityId: ScalarsEnums["Int"]
			animeId?: undefined
			comment?: undefined
			commentId?: undefined
			/**
			 * The notification context text
			 */
			context?: Maybe<ScalarsEnums["String"]>
			contexts?: undefined
			/**
			 * The time the notification was created at
			 */
			createdAt?: Maybe<ScalarsEnums["Int"]>
			episode?: undefined
			/**
			 * The id of the Notification
			 */
			id: ScalarsEnums["Int"]
			media?: undefined
			mediaId?: undefined
			message?: undefined
			thread?: undefined
			threadId?: undefined
			/**
			 * The type of notification
			 */
			type?: Maybe<ScalarsEnums["NotificationType"]>
			/**
			 * The user who liked the activity reply
			 */
			user?: Maybe<User>
			/**
			 * The id of the user who liked to the activity reply
			 */
			userId: ScalarsEnums["Int"]
	  }
	| {
			__typename: "ThreadCommentMentionNotification" | undefined
			activity?: undefined
			activityId?: undefined
			animeId?: undefined
			/**
			 * The thread comment that included the @ mention
			 */
			comment?: Maybe<ThreadComment>
			/**
			 * The id of the comment where mentioned
			 */
			commentId: ScalarsEnums["Int"]
			/**
			 * The notification context text
			 */
			context?: Maybe<ScalarsEnums["String"]>
			contexts?: undefined
			/**
			 * The time the notification was created at
			 */
			createdAt?: Maybe<ScalarsEnums["Int"]>
			episode?: undefined
			/**
			 * The id of the Notification
			 */
			id: ScalarsEnums["Int"]
			media?: undefined
			mediaId?: undefined
			message?: undefined
			/**
			 * The thread that the relevant comment belongs to
			 */
			thread?: Maybe<Thread>
			threadId?: undefined
			/**
			 * The type of notification
			 */
			type?: Maybe<ScalarsEnums["NotificationType"]>
			/**
			 * The user who mentioned the authenticated user
			 */
			user?: Maybe<User>
			/**
			 * The id of the user who mentioned the authenticated user
			 */
			userId: ScalarsEnums["Int"]
	  }
	| {
			__typename: "ThreadCommentReplyNotification" | undefined
			activity?: undefined
			activityId?: undefined
			animeId?: undefined
			/**
			 * The reply thread comment
			 */
			comment?: Maybe<ThreadComment>
			/**
			 * The id of the reply comment
			 */
			commentId: ScalarsEnums["Int"]
			/**
			 * The notification context text
			 */
			context?: Maybe<ScalarsEnums["String"]>
			contexts?: undefined
			/**
			 * The time the notification was created at
			 */
			createdAt?: Maybe<ScalarsEnums["Int"]>
			episode?: undefined
			/**
			 * The id of the Notification
			 */
			id: ScalarsEnums["Int"]
			media?: undefined
			mediaId?: undefined
			message?: undefined
			/**
			 * The thread that the relevant comment belongs to
			 */
			thread?: Maybe<Thread>
			threadId?: undefined
			/**
			 * The type of notification
			 */
			type?: Maybe<ScalarsEnums["NotificationType"]>
			/**
			 * The user who replied to the activity
			 */
			user?: Maybe<User>
			/**
			 * The id of the user who create the comment reply
			 */
			userId: ScalarsEnums["Int"]
	  }
	| {
			__typename: "ThreadCommentSubscribedNotification" | undefined
			activity?: undefined
			activityId?: undefined
			animeId?: undefined
			/**
			 * The reply thread comment
			 */
			comment?: Maybe<ThreadComment>
			/**
			 * The id of the new comment in the subscribed thread
			 */
			commentId: ScalarsEnums["Int"]
			/**
			 * The notification context text
			 */
			context?: Maybe<ScalarsEnums["String"]>
			contexts?: undefined
			/**
			 * The time the notification was created at
			 */
			createdAt?: Maybe<ScalarsEnums["Int"]>
			episode?: undefined
			/**
			 * The id of the Notification
			 */
			id: ScalarsEnums["Int"]
			media?: undefined
			mediaId?: undefined
			message?: undefined
			/**
			 * The thread that the relevant comment belongs to
			 */
			thread?: Maybe<Thread>
			threadId?: undefined
			/**
			 * The type of notification
			 */
			type?: Maybe<ScalarsEnums["NotificationType"]>
			/**
			 * The user who replied to the subscribed thread
			 */
			user?: Maybe<User>
			/**
			 * The id of the user who commented on the thread
			 */
			userId: ScalarsEnums["Int"]
	  }
	| {
			__typename: "ThreadCommentLikeNotification" | undefined
			activity?: undefined
			activityId?: undefined
			animeId?: undefined
			/**
			 * The thread comment that was liked
			 */
			comment?: Maybe<ThreadComment>
			/**
			 * The id of the activity which was liked
			 */
			commentId: ScalarsEnums["Int"]
			/**
			 * The notification context text
			 */
			context?: Maybe<ScalarsEnums["String"]>
			contexts?: undefined
			/**
			 * The time the notification was created at
			 */
			createdAt?: Maybe<ScalarsEnums["Int"]>
			episode?: undefined
			/**
			 * The id of the Notification
			 */
			id: ScalarsEnums["Int"]
			media?: undefined
			mediaId?: undefined
			message?: undefined
			/**
			 * The thread that the relevant comment belongs to
			 */
			thread?: Maybe<Thread>
			threadId?: undefined
			/**
			 * The type of notification
			 */
			type?: Maybe<ScalarsEnums["NotificationType"]>
			/**
			 * The user who liked the activity
			 */
			user?: Maybe<User>
			/**
			 * The id of the user who liked to the activity
			 */
			userId: ScalarsEnums["Int"]
	  }
	| {
			__typename: "ThreadLikeNotification" | undefined
			activity?: undefined
			activityId?: undefined
			animeId?: undefined
			/**
			 * The liked thread comment
			 */
			comment?: Maybe<ThreadComment>
			commentId?: undefined
			/**
			 * The notification context text
			 */
			context?: Maybe<ScalarsEnums["String"]>
			contexts?: undefined
			/**
			 * The time the notification was created at
			 */
			createdAt?: Maybe<ScalarsEnums["Int"]>
			episode?: undefined
			/**
			 * The id of the Notification
			 */
			id: ScalarsEnums["Int"]
			media?: undefined
			mediaId?: undefined
			message?: undefined
			/**
			 * The thread that the relevant comment belongs to
			 */
			thread?: Maybe<Thread>
			/**
			 * The id of the thread which was liked
			 */
			threadId: ScalarsEnums["Int"]
			/**
			 * The type of notification
			 */
			type?: Maybe<ScalarsEnums["NotificationType"]>
			/**
			 * The user who liked the activity
			 */
			user?: Maybe<User>
			/**
			 * The id of the user who liked to the activity
			 */
			userId: ScalarsEnums["Int"]
	  }
	| {
			__typename: "RelatedMediaAdditionNotification" | undefined
			activity?: undefined
			activityId?: undefined
			animeId?: undefined
			comment?: undefined
			commentId?: undefined
			/**
			 * The notification context text
			 */
			context?: Maybe<ScalarsEnums["String"]>
			contexts?: undefined
			/**
			 * The time the notification was created at
			 */
			createdAt?: Maybe<ScalarsEnums["Int"]>
			episode?: undefined
			/**
			 * The id of the Notification
			 */
			id: ScalarsEnums["Int"]
			/**
			 * The associated media of the airing schedule
			 */
			media?: Maybe<Media>
			/**
			 * The id of the new media
			 */
			mediaId: ScalarsEnums["Int"]
			message?: undefined
			thread?: undefined
			threadId?: undefined
			/**
			 * The type of notification
			 */
			type?: Maybe<ScalarsEnums["NotificationType"]>
			user?: undefined
			userId?: undefined
	  }
/**
 * Activity union type
 */
export type ActivityUnion =
	| {
			__typename: "TextActivity" | undefined
			/**
			 * The time the activity was created at
			 */
			createdAt: ScalarsEnums["Int"]
			/**
			 * The id of the activity
			 */
			id: ScalarsEnums["Int"]
			/**
			 * If the currently authenticated user liked the activity
			 */
			isLiked?: Maybe<ScalarsEnums["Boolean"]>
			/**
			 * If the activity is locked and can receive replies
			 */
			isLocked?: Maybe<ScalarsEnums["Boolean"]>
			isPrivate?: undefined
			/**
			 * If the currently authenticated user is subscribed to the activity
			 */
			isSubscribed?: Maybe<ScalarsEnums["Boolean"]>
			/**
			 * The amount of likes the activity has
			 */
			likeCount: ScalarsEnums["Int"]
			/**
			 * The users who liked the activity
			 */
			likes?: Maybe<Array<Maybe<User>>>
			media?: undefined
			message?: undefined
			messenger?: undefined
			messengerId?: undefined
			progress?: undefined
			recipient?: undefined
			recipientId?: undefined
			/**
			 * The written replies to the activity
			 */
			replies?: Maybe<Array<Maybe<ActivityReply>>>
			/**
			 * The number of activity replies
			 */
			replyCount: ScalarsEnums["Int"]
			/**
			 * The url for the activity page on the AniList website
			 */
			siteUrl?: Maybe<ScalarsEnums["String"]>
			status?: undefined
			/**
			 * The status text (Markdown)
			 */
			text: (args?: {
				/**
				 * Return the string in pre-parsed html instead of markdown
				 */
				asHtml?: Maybe<Scalars["Boolean"]>
			}) => Maybe<ScalarsEnums["String"]>
			/**
			 * The type of activity
			 */
			type?: Maybe<ScalarsEnums["ActivityType"]>
			/**
			 * The user who created the activity
			 */
			user?: Maybe<User>
			/**
			 * The user id of the activity's creator
			 */
			userId?: Maybe<ScalarsEnums["Int"]>
	  }
	| {
			__typename: "ListActivity" | undefined
			/**
			 * The time the activity was created at
			 */
			createdAt: ScalarsEnums["Int"]
			/**
			 * The id of the activity
			 */
			id: ScalarsEnums["Int"]
			/**
			 * If the currently authenticated user liked the activity
			 */
			isLiked?: Maybe<ScalarsEnums["Boolean"]>
			/**
			 * If the activity is locked and can receive replies
			 */
			isLocked?: Maybe<ScalarsEnums["Boolean"]>
			isPrivate?: undefined
			/**
			 * If the currently authenticated user is subscribed to the activity
			 */
			isSubscribed?: Maybe<ScalarsEnums["Boolean"]>
			/**
			 * The amount of likes the activity has
			 */
			likeCount: ScalarsEnums["Int"]
			/**
			 * The users who liked the activity
			 */
			likes?: Maybe<Array<Maybe<User>>>
			/**
			 * The associated media to the activity update
			 */
			media?: Maybe<Media>
			message?: undefined
			messenger?: undefined
			messengerId?: undefined
			/**
			 * The list progress made
			 */
			progress?: Maybe<ScalarsEnums["String"]>
			recipient?: undefined
			recipientId?: undefined
			/**
			 * The written replies to the activity
			 */
			replies?: Maybe<Array<Maybe<ActivityReply>>>
			/**
			 * The number of activity replies
			 */
			replyCount: ScalarsEnums["Int"]
			/**
			 * The url for the activity page on the AniList website
			 */
			siteUrl?: Maybe<ScalarsEnums["String"]>
			/**
			 * The list item's textual status
			 */
			status?: Maybe<ScalarsEnums["String"]>
			text?: undefined
			/**
			 * The type of activity
			 */
			type?: Maybe<ScalarsEnums["ActivityType"]>
			/**
			 * The owner of the activity
			 */
			user?: Maybe<User>
			/**
			 * The user id of the activity's creator
			 */
			userId?: Maybe<ScalarsEnums["Int"]>
	  }
	| {
			__typename: "MessageActivity" | undefined
			/**
			 * The time the activity was created at
			 */
			createdAt: ScalarsEnums["Int"]
			/**
			 * The id of the activity
			 */
			id: ScalarsEnums["Int"]
			/**
			 * If the currently authenticated user liked the activity
			 */
			isLiked?: Maybe<ScalarsEnums["Boolean"]>
			/**
			 * If the activity is locked and can receive replies
			 */
			isLocked?: Maybe<ScalarsEnums["Boolean"]>
			/**
			 * If the message is private and only viewable to the sender and recipients
			 */
			isPrivate?: Maybe<ScalarsEnums["Boolean"]>
			/**
			 * If the currently authenticated user is subscribed to the activity
			 */
			isSubscribed?: Maybe<ScalarsEnums["Boolean"]>
			/**
			 * The amount of likes the activity has
			 */
			likeCount: ScalarsEnums["Int"]
			/**
			 * The users who liked the activity
			 */
			likes?: Maybe<Array<Maybe<User>>>
			media?: undefined
			/**
			 * The message text (Markdown)
			 */
			message: (args?: {
				/**
				 * Return the string in pre-parsed html instead of markdown
				 */
				asHtml?: Maybe<Scalars["Boolean"]>
			}) => Maybe<ScalarsEnums["String"]>
			/**
			 * The user who sent the activity message
			 */
			messenger?: Maybe<User>
			/**
			 * The user id of the activity's sender
			 */
			messengerId?: Maybe<ScalarsEnums["Int"]>
			progress?: undefined
			/**
			 * The user who the activity message was sent to
			 */
			recipient?: Maybe<User>
			/**
			 * The user id of the activity's recipient
			 */
			recipientId?: Maybe<ScalarsEnums["Int"]>
			/**
			 * The written replies to the activity
			 */
			replies?: Maybe<Array<Maybe<ActivityReply>>>
			/**
			 * The number of activity replies
			 */
			replyCount: ScalarsEnums["Int"]
			/**
			 * The url for the activity page on the AniList website
			 */
			siteUrl?: Maybe<ScalarsEnums["String"]>
			status?: undefined
			text?: undefined
			/**
			 * The type of the activity
			 */
			type?: Maybe<ScalarsEnums["ActivityType"]>
			user?: undefined
			userId?: undefined
	  }
/**
 * Likeable union type
 */
export type LikeableUnion =
	| {
			__typename: "ListActivity" | undefined
			activityId?: undefined
			body?: undefined
			categories?: undefined
			childComments?: undefined
			comment?: undefined
			/**
			 * The time the activity was created at
			 */
			createdAt: ScalarsEnums["Int"]
			/**
			 * The id of the activity
			 */
			id: ScalarsEnums["Int"]
			/**
			 * If the currently authenticated user liked the activity
			 */
			isLiked?: Maybe<ScalarsEnums["Boolean"]>
			/**
			 * If the activity is locked and can receive replies
			 */
			isLocked?: Maybe<ScalarsEnums["Boolean"]>
			isPrivate?: undefined
			isSticky?: undefined
			/**
			 * If the currently authenticated user is subscribed to the activity
			 */
			isSubscribed?: Maybe<ScalarsEnums["Boolean"]>
			/**
			 * The amount of likes the activity has
			 */
			likeCount: ScalarsEnums["Int"]
			/**
			 * The users who liked the activity
			 */
			likes?: Maybe<Array<Maybe<User>>>
			/**
			 * The associated media to the activity update
			 */
			media?: Maybe<Media>
			mediaCategories?: undefined
			message?: undefined
			messenger?: undefined
			messengerId?: undefined
			/**
			 * The list progress made
			 */
			progress?: Maybe<ScalarsEnums["String"]>
			recipient?: undefined
			recipientId?: undefined
			repliedAt?: undefined
			/**
			 * The written replies to the activity
			 */
			replies?: Maybe<Array<Maybe<ActivityReply>>>
			replyCommentId?: undefined
			/**
			 * The number of activity replies
			 */
			replyCount: ScalarsEnums["Int"]
			replyUser?: undefined
			replyUserId?: undefined
			/**
			 * The url for the activity page on the AniList website
			 */
			siteUrl?: Maybe<ScalarsEnums["String"]>
			/**
			 * The list item's textual status
			 */
			status?: Maybe<ScalarsEnums["String"]>
			text?: undefined
			thread?: undefined
			threadId?: undefined
			title?: undefined
			/**
			 * The type of activity
			 */
			type?: Maybe<ScalarsEnums["ActivityType"]>
			updatedAt?: undefined
			/**
			 * The owner of the activity
			 */
			user?: Maybe<User>
			/**
			 * The user id of the activity's creator
			 */
			userId?: Maybe<ScalarsEnums["Int"]>
			viewCount?: undefined
	  }
	| {
			__typename: "TextActivity" | undefined
			activityId?: undefined
			body?: undefined
			categories?: undefined
			childComments?: undefined
			comment?: undefined
			/**
			 * The time the activity was created at
			 */
			createdAt: ScalarsEnums["Int"]
			/**
			 * The id of the activity
			 */
			id: ScalarsEnums["Int"]
			/**
			 * If the currently authenticated user liked the activity
			 */
			isLiked?: Maybe<ScalarsEnums["Boolean"]>
			/**
			 * If the activity is locked and can receive replies
			 */
			isLocked?: Maybe<ScalarsEnums["Boolean"]>
			isPrivate?: undefined
			isSticky?: undefined
			/**
			 * If the currently authenticated user is subscribed to the activity
			 */
			isSubscribed?: Maybe<ScalarsEnums["Boolean"]>
			/**
			 * The amount of likes the activity has
			 */
			likeCount: ScalarsEnums["Int"]
			/**
			 * The users who liked the activity
			 */
			likes?: Maybe<Array<Maybe<User>>>
			media?: undefined
			mediaCategories?: undefined
			message?: undefined
			messenger?: undefined
			messengerId?: undefined
			progress?: undefined
			recipient?: undefined
			recipientId?: undefined
			repliedAt?: undefined
			/**
			 * The written replies to the activity
			 */
			replies?: Maybe<Array<Maybe<ActivityReply>>>
			replyCommentId?: undefined
			/**
			 * The number of activity replies
			 */
			replyCount: ScalarsEnums["Int"]
			replyUser?: undefined
			replyUserId?: undefined
			/**
			 * The url for the activity page on the AniList website
			 */
			siteUrl?: Maybe<ScalarsEnums["String"]>
			status?: undefined
			/**
			 * The status text (Markdown)
			 */
			text: (args?: {
				/**
				 * Return the string in pre-parsed html instead of markdown
				 */
				asHtml?: Maybe<Scalars["Boolean"]>
			}) => Maybe<ScalarsEnums["String"]>
			thread?: undefined
			threadId?: undefined
			title?: undefined
			/**
			 * The type of activity
			 */
			type?: Maybe<ScalarsEnums["ActivityType"]>
			updatedAt?: undefined
			/**
			 * The user who created the activity
			 */
			user?: Maybe<User>
			/**
			 * The user id of the activity's creator
			 */
			userId?: Maybe<ScalarsEnums["Int"]>
			viewCount?: undefined
	  }
	| {
			__typename: "MessageActivity" | undefined
			activityId?: undefined
			body?: undefined
			categories?: undefined
			childComments?: undefined
			comment?: undefined
			/**
			 * The time the activity was created at
			 */
			createdAt: ScalarsEnums["Int"]
			/**
			 * The id of the activity
			 */
			id: ScalarsEnums["Int"]
			/**
			 * If the currently authenticated user liked the activity
			 */
			isLiked?: Maybe<ScalarsEnums["Boolean"]>
			/**
			 * If the activity is locked and can receive replies
			 */
			isLocked?: Maybe<ScalarsEnums["Boolean"]>
			/**
			 * If the message is private and only viewable to the sender and recipients
			 */
			isPrivate?: Maybe<ScalarsEnums["Boolean"]>
			isSticky?: undefined
			/**
			 * If the currently authenticated user is subscribed to the activity
			 */
			isSubscribed?: Maybe<ScalarsEnums["Boolean"]>
			/**
			 * The amount of likes the activity has
			 */
			likeCount: ScalarsEnums["Int"]
			/**
			 * The users who liked the activity
			 */
			likes?: Maybe<Array<Maybe<User>>>
			media?: undefined
			mediaCategories?: undefined
			/**
			 * The message text (Markdown)
			 */
			message: (args?: {
				/**
				 * Return the string in pre-parsed html instead of markdown
				 */
				asHtml?: Maybe<Scalars["Boolean"]>
			}) => Maybe<ScalarsEnums["String"]>
			/**
			 * The user who sent the activity message
			 */
			messenger?: Maybe<User>
			/**
			 * The user id of the activity's sender
			 */
			messengerId?: Maybe<ScalarsEnums["Int"]>
			progress?: undefined
			/**
			 * The user who the activity message was sent to
			 */
			recipient?: Maybe<User>
			/**
			 * The user id of the activity's recipient
			 */
			recipientId?: Maybe<ScalarsEnums["Int"]>
			repliedAt?: undefined
			/**
			 * The written replies to the activity
			 */
			replies?: Maybe<Array<Maybe<ActivityReply>>>
			replyCommentId?: undefined
			/**
			 * The number of activity replies
			 */
			replyCount: ScalarsEnums["Int"]
			replyUser?: undefined
			replyUserId?: undefined
			/**
			 * The url for the activity page on the AniList website
			 */
			siteUrl?: Maybe<ScalarsEnums["String"]>
			status?: undefined
			text?: undefined
			thread?: undefined
			threadId?: undefined
			title?: undefined
			/**
			 * The type of the activity
			 */
			type?: Maybe<ScalarsEnums["ActivityType"]>
			updatedAt?: undefined
			user?: undefined
			userId?: undefined
			viewCount?: undefined
	  }
	| {
			__typename: "ActivityReply" | undefined
			/**
			 * The id of the parent activity
			 */
			activityId?: Maybe<ScalarsEnums["Int"]>
			body?: undefined
			categories?: undefined
			childComments?: undefined
			comment?: undefined
			/**
			 * The time the reply was created at
			 */
			createdAt: ScalarsEnums["Int"]
			/**
			 * The id of the reply
			 */
			id: ScalarsEnums["Int"]
			/**
			 * If the currently authenticated user liked the reply
			 */
			isLiked?: Maybe<ScalarsEnums["Boolean"]>
			isLocked?: undefined
			isPrivate?: undefined
			isSticky?: undefined
			isSubscribed?: undefined
			/**
			 * The amount of likes the reply has
			 */
			likeCount: ScalarsEnums["Int"]
			/**
			 * The users who liked the reply
			 */
			likes?: Maybe<Array<Maybe<User>>>
			media?: undefined
			mediaCategories?: undefined
			message?: undefined
			messenger?: undefined
			messengerId?: undefined
			progress?: undefined
			recipient?: undefined
			recipientId?: undefined
			repliedAt?: undefined
			replies?: undefined
			replyCommentId?: undefined
			replyCount?: undefined
			replyUser?: undefined
			replyUserId?: undefined
			siteUrl?: undefined
			status?: undefined
			/**
			 * The reply text
			 */
			text: (args?: {
				/**
				 * Return the string in pre-parsed html instead of markdown
				 */
				asHtml?: Maybe<Scalars["Boolean"]>
			}) => Maybe<ScalarsEnums["String"]>
			thread?: undefined
			threadId?: undefined
			title?: undefined
			type?: undefined
			updatedAt?: undefined
			/**
			 * The user who created reply
			 */
			user?: Maybe<User>
			/**
			 * The id of the replies creator
			 */
			userId?: Maybe<ScalarsEnums["Int"]>
			viewCount?: undefined
	  }
	| {
			__typename: "Thread" | undefined
			activityId?: undefined
			/**
			 * The text body of the thread (Markdown)
			 */
			body: (args?: {
				/**
				 * Return the string in pre-parsed html instead of markdown
				 */
				asHtml?: Maybe<Scalars["Boolean"]>
			}) => Maybe<ScalarsEnums["String"]>
			/**
			 * The categories of the thread
			 */
			categories?: Maybe<Array<Maybe<ThreadCategory>>>
			childComments?: undefined
			comment?: undefined
			/**
			 * The time of the thread creation
			 */
			createdAt: ScalarsEnums["Int"]
			/**
			 * The id of the thread
			 */
			id: ScalarsEnums["Int"]
			/**
			 * If the currently authenticated user liked the thread
			 */
			isLiked?: Maybe<ScalarsEnums["Boolean"]>
			/**
			 * If the thread is locked and can receive comments
			 */
			isLocked?: Maybe<ScalarsEnums["Boolean"]>
			isPrivate?: undefined
			/**
			 * If the thread is stickied and should be displayed at the top of the page
			 */
			isSticky?: Maybe<ScalarsEnums["Boolean"]>
			/**
			 * If the currently authenticated user is subscribed to the thread
			 */
			isSubscribed?: Maybe<ScalarsEnums["Boolean"]>
			/**
			 * The amount of likes the thread has
			 */
			likeCount: ScalarsEnums["Int"]
			/**
			 * The users who liked the thread
			 */
			likes?: Maybe<Array<Maybe<User>>>
			media?: undefined
			/**
			 * The media categories of the thread
			 */
			mediaCategories?: Maybe<Array<Maybe<Media>>>
			message?: undefined
			messenger?: undefined
			messengerId?: undefined
			progress?: undefined
			recipient?: undefined
			recipientId?: undefined
			/**
			 * The time of the last reply
			 */
			repliedAt?: Maybe<ScalarsEnums["Int"]>
			replies?: undefined
			/**
			 * The id of the most recent comment on the thread
			 */
			replyCommentId?: Maybe<ScalarsEnums["Int"]>
			/**
			 * The number of comments on the thread
			 */
			replyCount?: Maybe<ScalarsEnums["Int"]>
			/**
			 * The user to last reply to the thread
			 */
			replyUser?: Maybe<User>
			/**
			 * The id of the user who most recently commented on the thread
			 */
			replyUserId?: Maybe<ScalarsEnums["Int"]>
			/**
			 * The url for the thread page on the AniList website
			 */
			siteUrl?: Maybe<ScalarsEnums["String"]>
			status?: undefined
			text?: undefined
			thread?: undefined
			threadId?: undefined
			/**
			 * The title of the thread
			 */
			title?: Maybe<ScalarsEnums["String"]>
			type?: undefined
			/**
			 * The time of the thread last update
			 */
			updatedAt: ScalarsEnums["Int"]
			/**
			 * The owner of the thread
			 */
			user?: Maybe<User>
			/**
			 * The id of the thread owner user
			 */
			userId: ScalarsEnums["Int"]
			/**
			 * The number of times users have viewed the thread
			 */
			viewCount?: Maybe<ScalarsEnums["Int"]>
	  }
	| {
			__typename: "ThreadComment" | undefined
			activityId?: undefined
			body?: undefined
			categories?: undefined
			/**
			 * The comment's child reply comments
			 */
			childComments?: Maybe<ScalarsEnums["Json"]>
			/**
			 * The text content of the comment (Markdown)
			 */
			comment: (args?: {
				/**
				 * Return the string in pre-parsed html instead of markdown
				 */
				asHtml?: Maybe<Scalars["Boolean"]>
			}) => Maybe<ScalarsEnums["String"]>
			/**
			 * The time of the comments creation
			 */
			createdAt: ScalarsEnums["Int"]
			/**
			 * The id of the comment
			 */
			id: ScalarsEnums["Int"]
			/**
			 * If the currently authenticated user liked the comment
			 */
			isLiked?: Maybe<ScalarsEnums["Boolean"]>
			isLocked?: undefined
			isPrivate?: undefined
			isSticky?: undefined
			isSubscribed?: undefined
			/**
			 * The amount of likes the comment has
			 */
			likeCount: ScalarsEnums["Int"]
			/**
			 * The users who liked the comment
			 */
			likes?: Maybe<Array<Maybe<User>>>
			media?: undefined
			mediaCategories?: undefined
			message?: undefined
			messenger?: undefined
			messengerId?: undefined
			progress?: undefined
			recipient?: undefined
			recipientId?: undefined
			repliedAt?: undefined
			replies?: undefined
			replyCommentId?: undefined
			replyCount?: undefined
			replyUser?: undefined
			replyUserId?: undefined
			/**
			 * The url for the comment page on the AniList website
			 */
			siteUrl?: Maybe<ScalarsEnums["String"]>
			status?: undefined
			text?: undefined
			/**
			 * The thread the comment belongs to
			 */
			thread?: Maybe<Thread>
			/**
			 * The id of thread the comment belongs to
			 */
			threadId?: Maybe<ScalarsEnums["Int"]>
			title?: undefined
			type?: undefined
			/**
			 * The time of the comments last update
			 */
			updatedAt: ScalarsEnums["Int"]
			/**
			 * The user who created the comment
			 */
			user?: Maybe<User>
			/**
			 * The user id of the comment's owner
			 */
			userId?: Maybe<ScalarsEnums["Int"]>
			viewCount?: undefined
	  }

export interface GeneratedSchema {
	query: Query
	mutation: Mutation
	subscription: Subscription
}

export type MakeNullable<T> = {
	[K in keyof T]: T[K] | undefined
}

export interface ScalarsEnums extends MakeNullable<Scalars> {
	UserSort: UserSort | undefined
	UserTitleLanguage: UserTitleLanguage | undefined
	NotificationType: NotificationType | undefined
	ScoreFormat: ScoreFormat | undefined
	MediaType: MediaType | undefined
	MediaFormat: MediaFormat | undefined
	MediaStatus: MediaStatus | undefined
	MediaSeason: MediaSeason | undefined
	MediaSource: MediaSource | undefined
	CharacterSort: CharacterSort | undefined
	CharacterRole: CharacterRole | undefined
	MediaSort: MediaSort | undefined
	StaffLanguage: StaffLanguage | undefined
	StaffSort: StaffSort | undefined
	StudioSort: StudioSort | undefined
	MediaTrendSort: MediaTrendSort | undefined
	MediaRankType: MediaRankType | undefined
	MediaListStatus: MediaListStatus | undefined
	ReviewSort: ReviewSort | undefined
	ReviewRating: ReviewRating | undefined
	RecommendationSort: RecommendationSort | undefined
	RecommendationRating: RecommendationRating | undefined
	MediaRelation: MediaRelation | undefined
	UserStatisticsSort: UserStatisticsSort | undefined
	MediaListSort: MediaListSort | undefined
	AiringSort: AiringSort | undefined
	ActivityType: ActivityType | undefined
	ActivitySort: ActivitySort | undefined
	ThreadSort: ThreadSort | undefined
	ThreadCommentSort: ThreadCommentSort | undefined
	LikeableType: LikeableType | undefined
	SiteTrendSort: SiteTrendSort | undefined
	SubmissionStatus: SubmissionStatus | undefined
	SubmissionSort: SubmissionSort | undefined
	RevisionHistoryAction: RevisionHistoryAction | undefined
	ModActionType: ModActionType | undefined
}
