export interface PluginVersion {
  name: string;
  description: string;
}

export interface Plugin {
  id: string;
  unique_run_count: number;
  like_count: number;
  editor_type: string[];
  thumbnail_url: string;
  versions: Record<string, PluginVersion>;
}

export interface Stats {
  meta: Plugin[];
}

export interface PluginCardProps {
  link: string;
  image: string;
  subtitle: string;
  installs: number;
  likes: number;
  tags: string[];
}
