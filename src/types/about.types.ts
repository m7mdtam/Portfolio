export interface AboutStat {
  value: string;
  label: string;
}

export interface AboutData {
  tag: string;
  heading: string;
  bio: string[];
  stats: AboutStat[];
}

export interface AboutTextProps {
  tag: string;
  heading: string;
  bio: string[];
}

export interface AboutStatsProps {
  stats: AboutStat[];
}

export interface AboutProps {
  data: AboutData;
}
